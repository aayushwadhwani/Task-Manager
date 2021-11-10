const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    name:{
        type: String,
        required:[true,"Cannot be Empty"],
        trim:true
    },
    completed:{
        type: Boolean,
        default: false,
    } 
});

module.exports = mongoose.model('Tasks', taskSchema);