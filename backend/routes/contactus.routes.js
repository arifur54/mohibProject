const express = require('express');
const router = express.Router();
const Contact = require('../controller/contactus.controller');
const authenticateToken = require('../config/validateUser');


router.get('/get_all',authenticateToken, Contact.getAll);

router.post('/submit_contact_info', Contact.submitContactUs);

router.delete('/delete_contact_info/:id',authenticateToken, Contact.deleteContactinfo);


module.exports = router; 