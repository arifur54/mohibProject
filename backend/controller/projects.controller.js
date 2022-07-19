const Projects = require('../models/projectModels/projects.model');
const fs = require('fs');
const commaFiles = require('../config/commafiles');
const _ = require('lodash');



let getAll = async function(req, res){
    try{
        const descriptions = await Projects.find({});
        if(!descriptions){
            res.status(404).send({
                errMsg: "unable to find description"
            })
        }

        if(descriptions.length === 0){
            res.send({
                errMsg: "No descriptions found in the database" 
            })
        }

        res.status(200).send({
            msg: "Descriptions retrived successfully",
            data: descriptions
        })

    }catch(error){
        res.status(404).send({
            msg: "Something went wrong :(",
            error: error
        })
    }
}

let addProjectDescription = async function(req, res){
    const beforeImgFiles = req.files.beforeImage;
    const afterImgFiles = req.files.afterImage;

    const projectDescription = new Projects ({
        projectType: req.body.projectType,
        projectTitle: req.body.projectTitle,
        location: req.body.location,
        description: req.body.description
    })
   
    if(!beforeImgFiles){
        res.send({ errMsg: "No files added"})
    }else if(beforeImgFiles.length > 10){
        res.send({errMsg: "Files are greater then 10 "})
    }else{
        beforeImgFiles.forEach((file, index, arr) => {
            projectDescription.beforeImage.push(file.path);
        }) 
    }
    
    if(!afterImgFiles){
        res.send({ errMsg: "No files added"})
    }else if(afterImgFiles.length > 10){
        res.send({errMsg: "Files are greater then 10 "})
    }else{    
        afterImgFiles.forEach((file, index, arr) => {
            projectDescription.afterImage.push(file.path);
        })
    }

    try{
        const addProject = await projectDescription.save();
        if(!addProject) return res.status(403).send({errMsg: "Unable to add projects"})    
        res.status(200).send({
            msg: "Project Description Added",
            data: projectDescription
        })
    }catch(error){
        res.status(404).send({
            msg: "Something went wrong :(",
            error: error
        })
    }
}



let updateProjectDescription = async function(req, res){
    try{
        const desc = await Projects.findById(req.params.id)
        if(desc){
            try{
                const updateDescription = await Projects.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body
                    },
                    {
                        new: true
                    }
                );

                res.status(200).send({
                    msg: "Project description Updated successfully",
                    data: updateDescription
                })
            }catch(error){
                res.status(500).send({
                    errMsg: error
                });
            }
        }else{
            res.status(404).send({
                errMsg: "description not found."
            })
        }
    }catch(error){
        res.status(404).send({
            msg: "Something went wrong :(",
            error: error
        })
    }
    
    
}

let deleteProjectDescription = async function(req, res){
    try{
        const desc = await Projects.findById(req.params.id)
        if(!desc){
            res.status(404).send({
                errMsg: "description not found."
            })
        }

        try{
            const beforeImg = desc.beforeImage;
            const afterImg = desc.afterImage;
            beforeImg.forEach((file, index) => {
                fs.unlink(file, (err) => {
                    if(err) {res.send({msg: err})}
                    console.log(`Before images: ${file} for ${req.params.id} deleted from file system`)
                })
            })

            afterImg.forEach((file, index) => {
                fs.unlink(file, (err) => {
                    if(err) {res.send({msg: err})}
                    console.log(`After images: ${file} for ${req.params.id} deleted from file system`)
                })
            })

            await desc.delete();

            res.status(200).send({
                msg: `Descripiton has been deleted successfully`

            })
        }catch(error){
            res.status(500).send({
                errMsg: error
            });
        }

    }catch(error){
        res.status(404).send({
            errorMsg: "Something went wrong :(",
            error: error
        })
    }
}

module.exports = {
    getAll,
    addProjectDescription,
    updateProjectDescription,
    deleteProjectDescription,
    

}

// Deleted codes for quick references
// let addBeforeImages = async function(req, res){
//     const files = req.files;
//     if(files){
//         let path = commaFiles(files)
//         let beforeImage = new BeforeImages({
//             beforeImg: path
//         });
//         try{
//             const addBeforeImg = await beforeImage.save();
//             console.log(addBeforeImg)
//             res.status(200).send({
//                 msg:"Project Before images added successfully!",
//                 data: addBeforeImg
//             })
         
//         }catch(error){
//             res.status(409).send({
//                 msg: "Unable to add before images",
//                 error: error
//             })
//         }
//      }
// }

// let addAfterImages = async function(req, res){
//     const files = req.files;
//     if(files){
//         let path = commaFiles(files)
//         let afterImage = new AfterImages({
//             afterImg: path
//         });
      
//         try{
//             const addAfterImg = await afterImage.save();
//             console.log(addAfterImg)
//             res.status(200).send({
//                 msg:"Project After images added successfully!",
//                 data: addAfterImg
//             })
         
//         }catch(error){
//             res.status(409).send({
//                 msg: "Unable to add after images",
//                 error: error
//             })
//         }
//      }
// }
