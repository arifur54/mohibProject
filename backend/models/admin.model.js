const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adminSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength:2
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength:4
    },
    password: {
        type: String,
        require: true,
        trim: true,
        minlength: 8
    },
    passwordSalt: {
        type: String
    },
    confirm: {
        type: Boolean,
        required: true,
        default: false
    }
},
    {
     timesstamps: true,
});



const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin