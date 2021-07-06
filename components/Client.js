const Client = require('../models/Client.models');
const nodemailer = require("nodemailer");
const  Options = require('../models/Option.models')



//// add client ////
exports.addClient = async(req,res)=>{
    const client =new Client({ ...req.body });
    const saveClient = await client.save();
    if(!saveClient) return res.status(500).json('data not found');
    return res.status(201).json({data: saveClient});
}

//// get All Client ////

exports.getClient = async (req, res)=>{
    const getclient = await Client.find({});
    if(!getclient) return res.status(500).json('data not found');
    return res.status(201).json({data: getclient});
}

//// get One Client ////

exports.getOneClient = async (req, res)=>{
    const getOneclient = await Client.findById({_id: req.params.id});
    if(!getOneclient) return res.status(500).json('data not found');
    return res.status(201).json({data: getOneclient});
}

//// send mail ////

exports.SendMail_Client =async (req,res)=>{
  
  ///get service ///
  const service = await Options.find()
  
  const {subject, text, pass, users, servicee}= req.body
  const Email= req.params.Email
  const user = User.findOne({Email: Email})

    if(user){
        var transporter = nodemailer.createTransport({
            service: servicee,
            auth: {
              user: users,
              pass: pass
            }
          });
          var mailOptions = {
            from: 'tessstt894@gmail.com',
            to: `${Email}`,
            subject: `${subject}`,
            text: `${text}`
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
            res.send('email sent')
    }else{
      console.log("Not send")
    }
}

