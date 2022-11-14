const Task = require('../models/taskModel')


const catchAsync = func => {
    return (req, res, next) => {
        func(req, res, next).catch(next);
    }
}

exports.getAllTasks = async (req, res, next) => {
    try {
      const tasks = await Task.find()
      res.status(200).json({tasks:tasks})
    } catch (error) {
      res.status(500).json({msg: error})        
    }
}
exports.getTask = async (req, res, next) => {
    try {
        const {id:taskID} = req.params 
        const task = await Task.findOne({_id:taskID});
    if (!task) {
        return res.status(404).json({msg:`no task with id : ${taskID} `})
    }    
        res.status(200).json({task})    
    } catch (error) {
        res.status(500).json({msg: error})   
    }
    
}

exports.createTask = async (req, res, next) => {
    try {
        const {id:_listId} = req.params;
        const task = await Task.create({id:_listId}, req.body)

        res.status(201).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
    }    
}



exports.updateTask = async (req, res, next) => {
    try {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndUpdate({_id:taskID}, req.body,{
            new:true,
            runValidators:true,
         }) 
        if (!task) {
            return res.status(404).json({msg:`no task with id : ${taskID} `})
        } 
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg: error})  
    }
    
}

exports.deleteTask = async (req, res, next) => {
    try {
        const {id:taskID} = req.params; 
        const task = await Task.findOneAndDelete({_id:taskID}); 
        if (!task) {
            return res.status(404).json({msg:`no task with id : ${taskID} `})  
        }
        res.status(200).json({task})    
    } catch (error) {
        res.status(500).json({msg: error})   
    }
    
}
