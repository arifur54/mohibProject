const express = require('express');
const router = express.Router();
const Admin = require('../controller/admin.controller');


router.get('/findAll', Admin.findAll)
router.post('/addAdmin', Admin.addAdmin)
router.post('/adminLogin', Admin.adminLogin)




module.exports = router;