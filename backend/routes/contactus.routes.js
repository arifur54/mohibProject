const express = require('express');
const router = express.Router();
const Contact = require('../controller/contactus.controller');


router.get('/get_all', Contact.getAll);

router.post('/submit_contact_info', Contact.submitContactUs);

router.delete('/delete_contact_info/:id', Contact.deleteContactinfo);


module.exports = router; 