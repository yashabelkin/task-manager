const mongoose = require('mongoose');


const ListSchema = new mongoose.Schema ({
    name:{
        type:String,
        required:[true, 'must provide a name'],
        trim:true,
        maxlength:[20, 'name cannot be more than 20 characters'],
    }
})

module.exports = mongoose.model('List', ListSchema) 