const express = require('express');
const router = express.Router();
const {addClient, getClient, getOneClient, SendMail_Client} = require('../components/Client')
const {isAdmin, verifyIsAuth, isAuth} =require('../middleware/auth.middleware')


router.post('/create',addClient)
router.get('/clients',verifyIsAuth, isAdmin, isAuth, getClient)
router.get('/info',verifyIsAuth, isAdmin, getOneClient)
router.get('/SendMail_Client',verifyIsAuth, isAdmin, SendMail_Client)

module.exports = router