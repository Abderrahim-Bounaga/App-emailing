const express = require('express');
const router = express.Router();
const {addClient,getClient,SendMail_Client} = require('../components/Client')

router.post('/Client',addClient)
router.get('/list-Client',getClient)
router.get('/SendMail_Client/:Email',SendMail_Client)

module.exports = router