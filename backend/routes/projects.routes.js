const express = require('express');
const router = express.Router();
const project = require('../controller/projects.controller');
const store = require('../config/multer');

//router
router.get('/getAll', project.getAll);

router.post('/addProjectDecription', project.addProjectDecription);  
router.post('/addBeforeImages',store.array('beforeImg', 25), project.addBeforeImages);
router.post('/addAfterImages', store.array('afterImg', 25), project.addAfterImages);

module.exports = router;