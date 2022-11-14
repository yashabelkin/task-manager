const List = require('../models/listModel')


exports.getAllLists = async (req, res) => {
    try{
    const lists = await List.find()
    res.ststus(200).json({
        status: 'success',
        results: lists.length,
        data: lists 
        
    });
    } catch (err) {
        res.status(404).json({
            status:'fail',
            message:err
        });
    }
}

exports.getList = async (req, res) => {
    try {
        const list = await list.findById(req.params.id).populate('tasks');
    if (!list) {
        return res.status(404).json({msg:`no list with id : ${listID}`})
    }    
        res.status(200).json({list})    
    } catch (error) {
        res.status(500).json({msg: error})   
    }
    
}

exports.createList = async (req, res) => {
    try {
        const list = await List.create(req.body)
        res.status(201).json({list})
    } catch (error) {
        res.status(500).json({msg: error})
    }    
}

exports.updateList = async (req, res) => {
    try {
        const {id:listID} = req.params;
        const list = await List.findOneAndUpdate({_id:listID}, req.body,{
            new:true,
            runValidators:true,
         }) 
        if (!list) {
            return res.status(404).json({msg:`no list with id : ${listID} `})
        } 
        res.status(200).json({list})
    } catch (error) {
        res.status(500).json({msg: error})  
    }
    
}

exports.deleteList = async (req, res) => {
    try {
        const {id:listID} = req.params; 
        const list = await List.findOneAndDelete({_id:listID}); 
        if (!list) {
            return res.status(404).json({msg:`no list with id : ${listID} `})  
        }
        res.status(200).json({list})    
    } catch (error) {
        res.status(500).json({msg: error})   
    }
    
}
