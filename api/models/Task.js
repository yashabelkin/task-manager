const mongoose = require('mongoose');


const TaskSchema = new mongoose.Schema ({
    name:{
        type:String,
        required:[true, 'must provide a name'],
        trim:true,
        maxlength:[20, 'name cannot be more than 20 characters'],
    },
    completed:{
        type:Boolean,
        default:false,
    },
    _listId: {
        type: mongoose.Types.ObjectId,
        required:true
    }
})

module.exports = mongoose.model('Task', TaskSchema) 