const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    projectType:{
        type: String,
        required: true,
    },
    projectTitle:{
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    beforeImage: {
        type: [String],
        required: true
    },
    afterImage: {
        type: [String],
        required: true
    }
  
}, {timestamps: true});


const Project = mongoose.model('projects', projectSchema);

module.exports = Project;