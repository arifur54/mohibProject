const Projects = require('../models/projectModels/projects.model');
const BeforeImages = require('../models/projectModels/project_beforeImages.model');
const AfterImages = require('../models/projectModels/project_afterImages.model');

const commaFiles = require('../config/commafiles');
const _ = require('lodash');



let getAll = async function(req, res){
    await res.send("Heelo")
}

let addProjectDecription = async function(req, res){
    let reqFields = ['projectType', 'streetName', 'location', 'designType', 'features', 'ProjectOverview'];
    let addProjectdecrip;
    let data = _.pick(req.body, reqFields);
    console.log(req.body);
    try{
        addProjectdecrip = await Projects.create(data);
        res.status(200).send({
            msg: "Project Description Added",
            data: data
        })
    }catch(error){
        res.status(404).send({
            msg: "Something went wrong :(",
            error: error
        })
    }
}


let addBeforeImages = async function(req, res){
    const files = req.files;
    if(files){
        let path = commaFiles(files)
        let beforeImage = new BeforeImages({
            beforeImg: path
        });
        try{
            const addBeforeImg = await beforeImage.save();
            console.log(addBeforeImg)
            res.status(200).send({
                msg:"Project Before images added successfully!",
                data: addBeforeImg
            })
         
        }catch(error){
            res.status(409).send({
                msg: "Unable to add before images",
                error: error
            })
        }
     }
}

let addAfterImages = async function(req, res){
    const files = req.files;
    if(files){
        let path = commaFiles(files)
        let afterImage = new AfterImages({
            afterImg: path
        });
      
        try{
            const addAfterImg = await afterImage.save();
            console.log(addAfterImg)
            res.status(200).send({
                msg:"Project After images added successfully!",
                data: addAfterImg
            })
         
        }catch(error){
            res.status(409).send({
                msg: "Unable to add after images",
                error: error
            })
        }
     }
}


module.exports = {
    getAll,
    addProjectDecription,
    addBeforeImages,
    addAfterImages

}