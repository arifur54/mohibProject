const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
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
        unique: true,
        trim: true,
        minlength: 8
    }
},
    {
     timesstamps: true,
});


const Admin = mongoose.model('Admin', userSchema);

module.exports = Admin;