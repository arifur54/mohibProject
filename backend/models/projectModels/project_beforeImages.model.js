const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const beforeImages = new Schema({
    beforeImg:{
        type: String,
        required: true
    }
})

const BeforeImages = mongoose.model('project_BeforeImage', beforeImages);

module.exports = BeforeImages;