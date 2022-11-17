const mongoose = require('mongoose');


const ListSchema = new mongoose.Schema ({
    name:{
        type:String,
        required:[true, 'must provide a name'],
        trim:true,
        maxlength:[20, 'name cannot be more than 20 characters'],
    },
        // tasks: {
        //     type: mongoose.Types.ObjectId,
        //     ref: 'Task',
        //     required:true
        // }
    
},
{
    toJSON: { virtuals:true },
    toObject: { virtuals:true }
}
)

// virtual populate
ListSchema.virtual('tasks', {
    ref: 'Task',
    foreignField:'list',
    localField:'_id'
})


const List = mongoose.model('List', ListSchema)
module.exports = List
 
