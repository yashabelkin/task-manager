const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: True
    },
    email: {
        type: String,
        required: True
    },
    password: {
        type: String,
        required: True
    },  
    date: {
        type: Date,
        default: Date.now
    }    
});

module.exports = mongoose.model('User', UserSchema) 