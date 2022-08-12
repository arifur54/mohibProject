const express = require('express');
const router = express.Router();
const project = require('../controller/projects.controller');
const store = require('../config/multer');

//router
router.get('/getAll', project.getAll);

router.get('/getAllById/:id', project.getAllById);

router.post('/addProjectDescription', store.fields([
    {
        name: "beforeImage", maxCount: 10
    },
    {
        name: "afterImage", maxCount: 10
    }
    ]), project.addProjectDescription);  

router.put('/updateProjectDescription/:id', store.fields([
    {
        name: "beforeImage", maxCount: 10
    },
    {
        name: "afterImage", maxCount: 10
    }
]) ,project.updateProjectDescription);


router.delete('/deleteProjectDescription/:id', project.deleteProjectDescription);


module.exports = router;