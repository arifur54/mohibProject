const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "arifur.r.1992@gmail.com",
        pass: "ryrxpbkmtqqaeucg"
    },
    port: 465,
    host: 'smtp.gmail.com',
});

module.exports = transporter;