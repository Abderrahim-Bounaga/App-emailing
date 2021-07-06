const Group = require('../models/Group.models')
const Client = require('../models/Client.models');
const Fawn = require('fawn');
const nodemailer = require("nodemailer");
const  Options = require('../models/Option.models')


exports.addGroup = async(req,res)=>{
    // const task = Fawn.Task();
    const validName =await  Group.findOne({name : req.body.name});
    if(validName) return res.status(400).json("Name already exit");
  
        const group =new Group({ ...req.body});
        const createGroup = group.save()

        if(!createGroup) return res.status(500).Json('data not saved');
        return res.status(201).json('data saved');
}
/////sent Mail/////
exports.sendMail = async (req,res)=>{
  const getGroup = await Group.findOne({name: req.body.name});
  // if(getGroup) return res.status(201).json({data:getGroup})
  const getId = getGroup.client_Id
  const getClient = await Client.find().where('_id').in(getId).exec()

  if(getClient){
    getClient.map(v =>
      {
        // console.log(v.mail)
         var transporter = nodemailer.createTransport({
          service:"gmail",
          auth: {
            user: 'tessstt894@gmail.com',
            pass: 'testtest20099'
          }
        });
        var mailOptions = {
          from: 'tessstt894@gmail.com',
          to: `${v.mail}`,
          subject: `test`,
          text: `test`
        };
        transporter.sendMail(mailOptions,function(error,info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: '+ info.response);
          }
        });
          res.send('email sent')
      }
      )
  }else{
      console.log("Not send")
  }
}
