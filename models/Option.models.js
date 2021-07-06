const mongoose = require('mongoose');


const options = new mongoose.Schema({
    servecis:[{
        service:{
            type:String,
            required:true
        },
        port:{
            type:Number,
            required:true
        },
        secure:{
            type:Boolean,
            required:true
        }
    }],
})
const Options = mongoose.model('Options', options);
module.exports = Options