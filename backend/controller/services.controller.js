const Service = require('../models/services.model');
const _ = require('lodash');
const path = require('path')

let getAll = async function(req, res){
    await res.send("Heelo")
}

let addService = async function(req, res) {
    const files = req.files;
    let serviceDescription = new Service({
        type: req.body.type,
        title: req.body.title,
        sub_title: req.body.sub_title,
        decription: req.body.decription,   
    })

    if(files){
    //    let path = '';
       files.forEach((file, index, arr) => {
        serviceDescription.images.push(file.path);
        //    path = path + files.path + ","
       })
    //    path = path.substring(0, path.lastIndexOf(","))
    //    serviceDescription.images = path

       try{
        const addService = await serviceDescription.save();
        if(addService){
            res.status(200).send({
                msg: "Service added successfully"
            })
        }else{
            res.status(403).send({
                msg: "Unable to add service"
            })
        }
    }catch(error){
        res.status(404).send({
            error: error.message
        })
    }

       
    }
}

let deleteService = async function(req, res){
    // implement delete service
}

module.exports = {
    addService,
    getAll
}
