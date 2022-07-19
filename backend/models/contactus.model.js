const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        trim: true
    },
    options: {
        type: String,
        required: true
    },
    customerMessage: {
        type: String,
        required: true
    }

},
    {
        timestamps: true,
    }
)


const Contact = mongoose.model('contact', contactSchema);

module.exports = Contact;