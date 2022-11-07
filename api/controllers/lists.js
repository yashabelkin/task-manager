const List = require('../models/List')


const getAllLists = async (req, res) => {
    try {
      const lists = await List.find({})
      res.status(200).json({lists:lists})
    } catch (error) {
      res.status(500).json({msg: error})        
    }
}

const getList = async (req, res) => {
    try {
        const {id:listID} = req.params 
        const list = await list.findOne({_id:listID});
    if (!list) {
        return res.status(404).json({msg:`no list with id : ${listID} `})
    }    
        res.status(200).json({list})    
    } catch (error) {
        res.status(500).json({msg: error})   
    }
    
}

const createList = async (req, res) => {
    try {
        const list = await List.create(req.body)
        res.status(201).json({list})
    } catch (error) {
        res.status(500).json({msg: error})
    }    
}

const updateList = async (req, res) => {
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

const deleteList = async (req, res) => {
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

module.exports = { 
    getAllLists, getList, createList, updateList, deleteList
 }