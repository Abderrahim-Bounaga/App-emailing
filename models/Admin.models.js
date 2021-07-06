const mongoose = require('mongoose');

const user = new mongoose.Schema({
    firstName:{
        type:String,
        required: true,
        min:3,
    },
    lastName:{
        type:String,
        required:true,
        min:3
    },
    dateAmbouche:{
        type:Date,
        required:true,
        default: Date.now
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type: String,
        enum: [{
                name : "admin",
            },
            {
                name : "user"
            }
        ],
        default: 'user'
    },
})

const User = mongoose.model('User', user);
module.exports = User