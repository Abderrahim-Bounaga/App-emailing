const express = require('express')
const route = express.Router()
const { signUpUser,
    signInUser,
    getallUser,
    getUser,
    deleteUser,
    updatePassword} = require('../components/Users')
const {verifyIsAuth} = require('../middleware/auth.middleware')

//register user 
route.post('/create', signUpUser)
//login User 
route.post('/login', signInUser)
// admin 
route.get('/users',verifyIsAuth, getallUser)
// profil
route.get('/profil',verifyIsAuth, getUser)
// remove user
route.post('/remove',verifyIsAuth, deleteUser)
// UpDate Password
route.post('/Update-password',verifyIsAuth,updatePassword) 
// route.get('/logout', logout)

module.exports = route;