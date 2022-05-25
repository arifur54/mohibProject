const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const adminSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        require: true,
        trim: true,
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