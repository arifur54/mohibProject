const express  = require('express');
const cors = require('cors');
// const mongoose = require('mongoose');
const admin = require("./routes/admin.routes")
const service = require("./routes/services.routes")
const projects = require("./routes/projects.routes");

//require('dotenv').config();

// Configuring express and port
const app = express();
//const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use("/admin", admin);
app.use("/service", service)
app.use("/projects", projects)
app.use("/uploads", express.static('uploads'))
app.use("*", (req, res) => res.status(404).json({ error: "Page Not Found"}))


module.exports = app;


// Database URI
// const uri = process.env.ATLAS_URI;

// Database Config
// mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
// const connetion = mongoose.connection;

// // DB connect
// connetion.once('open', () => {
//     console.log("MongoDB database connection established successfully")
// });

// Requering Router
// const adminRouter = require('./routes/admin');

// Using router 
//app.use('/admin', adminRouter);




// Listning for port
// app.listen(port, ()=>{
//     console.log(`server running on port: ${port}`);
// })