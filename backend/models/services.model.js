const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    serviceType: {
        type: String,
    },
    title: {
        type: String,
    },
    sub_title: {
        type: String,
    },
    decription: {
        type: String
    },
    images: {
        type: String,
        required: true
    }
}, {timestamps: true})

const service = mongoose.model('service', serviceSchema);

module.exports = service