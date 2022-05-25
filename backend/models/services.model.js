const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    serviceType: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    sub_title: {
        type: String,
        required: true,
    },
    decription: {
        type: String,
        required: true,
    },
    images: {
        type: String,
        required: true
    }
}, {timestamps: true})

const service = mongoose.model('service', serviceSchema);

module.exports = service