const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    title: {
        type: String,
    },
    sub_title: {
        type: String,
    },
    decription: {
        type: String
    }
})

const service = mongoose.model('service', serviceSchema);

module.exports = service