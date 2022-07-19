const express = require('express');
const router = express.Router();
const service = require('../controller/services.controller');
const store = require('../config/multer')

//router
router.get('/getAll', service.getAll);

//Adding more then 5 images causes error... need to fix
router.post('/addService', store.array('images', 5), service.addService);  



module.exports = router;