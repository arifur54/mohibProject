const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    projectType:{
        type: String,
        required: true,
    },
    streetName: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    designType: {
        type: String,
        required: true,
    },
    features: {
        type: String,
        required: true,
    },
    ProjectOverview: {
        type: String,
        required: true,
    },
    projectBeforeID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "beforeImage"
    },
    projectAfterID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "afterImage"
    }
  
}, {timestamps: true});


const Project = mongoose.model('projects', projectSchema);

module.exports = Project;