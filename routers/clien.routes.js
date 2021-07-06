const express = require('express');
const router = express.Router();
const {addClient, getClient, getOneClient, SendMail_Client} = require('../components/Client')

router.post('/create',addClient)
router.get('/clients',getClient)
router.get('/info',getOneClient)
router.get('/SendMail_Client',SendMail_Client)

module.exports = router