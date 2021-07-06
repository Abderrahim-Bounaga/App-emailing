const express = require('express');
const router = express.Router();
const {addGroup, sendMail} = require('../components/Groupe')
const{addOption}= require('../components/option')

router.post('/creat',addGroup)
router.post('/sendMail',sendMail)
router.post('/addOption',addOption)

module.exports = router