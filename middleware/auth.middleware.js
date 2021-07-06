const jwt = require('jsonwebtoken')
const User = require('../models/Admin.models')

const verifyIsAuth = (req, res , next) => {
    const auth_header = req.headers.jwt_token;
    console.log(auth_header)
    let token = auth_header;
    if(token){
        jwt.verify(token, process.env.SECRET_TOKEN, (err, decodedToken) => {
            if(err){
               return res.status(400).json({isAuth:false,role:''})
            }else{
                const user = User.findOne(decodedToken.id)
                next()
            }
        })
    }
    else{
        res.json({isAuth:false,role:''})
    }
}
const isAdmin = (req, res, next) => {
    res.role = 'admin'
    next()
}


const isUser = (req, res, next) => {
    res.role = 'user'
    next()
}

// const isAuth = (req, res, next) => {
//     const token = req.cookies.jwt_token
//     if(token){
//         jwt.verify(token, process.env.SECRET_TOKEN, (err, decodedToken) =>{
//             if(!err && decodedToken.role === res.role){
//              res.status(200).json({isAuth:true,role: res.role})
              
//             }else{
//                return res.status(400).clearcookie('jwt_token').json({isAuth:false,role:''})
//             }
//         })
//     }else{
//        return res.status(400).json({isAuth:false,role:''})
//     }
// }
// const isAuthenti = (role) => (req, res, next) => {
//     const token = req.cookie.jwt_token
//     if(token){
//         jwt.verify(token, process.env.SECRET_TOKEN, (err, decodedToken) =>{
//             if(!err && decodedToken.role === res.role){
//               return  res.status(200).json({isAuth:true,role})
//             }else{
//                return res.status(404).clearcookie('jwt_token').json({isAuth:false,role:''})

//             }
//         })
//     }else{
//        return res.status(404).json({isAuth:false,role:''})

//     }
// }




// check the roles 
// const checkRoles = (req, res, next) => {
//     const token = req.cookie.jwt_token
//     if(token){
//         jwt.verify(token, process.env.SECRET_TOKEN, async (err, decodedToken) =>{
//             if(err){
//                 console.log(err.message)
//             }else{
//                 let user = await User.findOne(decodedToken.id)
//                 const roles = user.role
                
//                 if(roles === 'user') {
//                     return res.status(200).json('welcome user')
//                 } else if(roles === 'technic') {
//                     return res.status(200).json('welcome technic')
//                 }

//                 return res.status(200).json('welcome admin')
                

//                 // roles === 'user' ?  
//                 //     res.status(200).json('welcome user') 
//                 //     : 
//                 //     (roles === 'technic' ?  res.status(200).json('welcome technic') : res.status(200).json('welcome admin') )
//             }
//         })
//     }
//     else{
//         return res.status(200).json('Get the f*** out of here!')
//     }
// }

module.exports = {verifyIsAuth, isAdmin, isUser}