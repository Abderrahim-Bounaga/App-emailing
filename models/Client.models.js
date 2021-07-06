const mongoose = require('mongoose');


const client = new mongoose.Schema({
    firstName: {
        type:String,
        required:true,
        max:10,
        min:2
    },
    lastName:{
        type:String,
        required:true,
        max:10,
        min:2
    },
    phoneNumber:{
        type:String,
        required:true,
        min:6,
        max:16
    },
    mail:{
        type:String,
        required:true,
        min:6,
        max:50
    },
    message:{
        type:String,
        required:true,
        min:10,
        max:500
    }
})

const Client = mongoose.model('Client', client);
module.exports = Client