const mongoose = require('mongoose');

const d = new Date();
let month = d.getMonth() + 1;
if (month < 10) month = `0${month}`;
const dt = `${d.getFullYear()}-${month}-${d.getDate()}`;

const group = new mongoose.Schema({
    name: {
        type:String,
        required:true,
        max:10,
        min:2
    },
    date:{
        type:Date,
        required:true,
        default:dt
    },
    client_Id:[{
        type: mongoose.Schema.Types.ObjectId, ref: 'Client'
    }]
})

const Group = mongoose.model('Group', group);
module.exports = Group