const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv')
dotenv.config({path: './.env'});
const PORT = process.env.PORT||4040;
var Fawn = require("fawn");
 

const clientRouter = require('./routers/clien.routes')
const groupRouter = require('./routers/group.routes')
const usersRouter = require('./routers/users.routes')

mongoose.connect(process.env.DATA_SECR, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}, (err,data)=>{
    if(data){
        console.log('db connected')
    }else{
        console.log('db not connected')
        
    }
})
Fawn.init(mongoose);
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:true }))

app.use('/',clientRouter);
app.use('/group',groupRouter);
app.use('/admin',usersRouter);

app.listen(PORT, ()=>{
    console.log(`app listning : localhost:${PORT}`)
});



module.exports= app