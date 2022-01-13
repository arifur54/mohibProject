const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    projectType:{
        type: String,
    },
    streetName: {
        type: String,
    },
    location: {
        type: String,
    },
    designType: {
        type: String,
    },
    features: {
        type: String,
    },
    ProjectOverview: {
        type: String
    }
  
}, {timestamps: true});

// const extend = (Schema, obj) => (
//     new mongoose.Schema(
//       Object.assign({}, Schema.obj, obj)
//     )
//   );


// const beforeImagesSchema = extend(projectSchema, {
//     beforeImages:{
//         type: String,
//         required: true
//     }
// })

// const afterImagesSchema = extend(projectSchema, {
//     afterImages:{
//         type: String,
//         required: true
//     }
// })

const Project = mongoose.model('projects', projectSchema);
// const BeforeImage = mongoose.model("project_BeforeImages", beforeImagesSchema);
// const AfterImage = mongoose.model("project_AfterImages", afterImagesSchema);

module.exports = Project;