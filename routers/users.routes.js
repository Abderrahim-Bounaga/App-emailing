const express = require('express')
const route = express.Router()
const { signUpUser, signInUser, getallUser } = require('../components/Users')
const {verifyIsAuth} = require('../middleware/auth.middleware')

//register user 
route.post('/create', signUpUser)
//login User 
route.post('/login', signInUser)
// admin 
route.get('/users',verifyIsAuth, getallUser)
// lougout 
// route.get('/logout', logout)

module.exports = route;