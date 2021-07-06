const  Options = require('../models/Option.models')

exports.addOption =async (req,res)=>{

    const  addopt = new Options({
       ...req.body
    });
    const checService =await Options.findOneAndUpdate(
        { _id: req.body.id },
        { $push:{
             servecis:{
                service:req.body.servecis[0].service,
                port:req.body.servecis[0].port,
                secure:req.body.servecis[0].secure
          }
            } 
        },
        )
        // console.log(checService) 
        if(!checService){
            const creatOption = addopt.save()
            return res.status(201).json({data: creatOption}) 
        }
         return res.status(201).json("update data")
}