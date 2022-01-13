const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const afterImages = new Schema({
    afterImg:{
        type: String,
        required: true
    }
})

const AfterImages = mongoose.model('project_AfterImage', afterImages);

module.exports = AfterImages;