const express  = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

// Configuring express and port
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Database URI
const uri = process.env.ATLAS_URI;

// Database Connections 
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
const connetion = mongoose.connection;

connetion.once('open', () => {
    console.log("MongoDB database connection established successfully")
});

// Requiring Router
const adminRouter = require('./routes/admin');

// Using router 
//app.use('/admin', adminRouter);




// Listning for port
app.listen(port, ()=>{
    console.log(`server running on port: ${port}`);
})