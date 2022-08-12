const express = require('express');
const router = express.Router();
const Admin = require('../controller/admin.controller');
const authenticateToken = require('../config/validateUser');


router.get('/findAll', authenticateToken, Admin.findAll)
router.post('/addAdmin',authenticateToken, Admin.addAdmin)
router.post('/adminLogin', Admin.adminLogin)
router.post('/change_password', authenticateToken, Admin.changePassword)





module.exports = router;