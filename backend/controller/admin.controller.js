const Admin = require('../models/admin.model')
const _ = require('lodash');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// require('dotenv').config();


// Create a secure register and login later. 
let findAll = async function(req, res) {
    try{
        let all = await Admin.find({})
        res.status(200).send(all)
    }catch (error) {
        res.status(400).send({
            message: "Error getting admins",
            error: error.message
        })
    }
}

let addAdmin = async (req, res) => {
    const { username, email, password } = req.body;
    if(!username || typeof username !== 'string'){
        return res.json({status: 'error', error: 'Invalid username'})
    }
    if(!email || typeof email !== 'string'){
        return res.json({status: 'error', error: 'Invalid email'})
    }

    if(!password){
        return res.json({status: 'error', error: 'Password cannot be empty'})
    }

    if(password.length < 8){
        return res.json({status: 'error', error: 'Password must be minmum of 8 char long'})
    }

    let adminExists;
    try{
        adminExists = await Admin.findOne({email: req.body.email})
        if(adminExists){
            console.log(adminExists)
            res.send({
                msg: "User already exists"
            })
            console.log("True")
        }else{
            const saltRounds = 10;
            let addAdmin;
            const hashedPassword = await bcrypt.hash(password, saltRounds)
            addAdmin = await Admin.create({
                username,
                email,
                password: hashedPassword
            });

            res.status(200).send({
                msg: "Admin Added successfully",
                data: addAdmin
            })
        }
                        
    }catch(error){
        console.log(error)
        return res.status(500).send({
            msg: "Internal Server error Occured",
            err: error
        });
    }
    
}

let adminLogin = async function(req, res) {
    let admin;
    try{
        admin = await Admin.findOne({email: req.body.email})
        if(admin) {
            const cmp = await bcrypt.compare(req.body.password, admin.password)
            const adminData = { 
                id: admin.id,
                name: admin.username,
                email: admin.email,
                confirm: admin.confirm
            }
            if(cmp){
                const token = jwt.sign({adminData}, process.env.JWT_SECRET)
                res.status(200).send({
                    msg: "Auth Confirm",
                    token: token
                })  
            }else{
                res.send({
                    msg: "Wrong password entered"
                })
            }
        }else{
            return res.status(403).send({
                msg: "Email dosent exists"
            })
        }

    }catch (err) {
        res.status(404).send({
            error: err
        })
    }
}

// This route need to be tested once frontend varification completes.. 
let changePassword = async function(req, res){
    const { token, newPassword } = req.body;
    try{
        const admin = jwt.verify(token, process.env.JWT_SECRET)
        if(!admin){
            res.send({
                status: 'error',
                msg: 'Admin not found'
            })
        }
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        const _id = admin.id
        await Admin.updateOne({_id} , {
            $set: {password: hashedPassword}
        } )

        res.status(200).send({
            msg:"Password updated successfully"
        })

    }catch(error){
        res.status(404).send({
            error: error
        })
    }

}

module.exports = {
   findAll,
   addAdmin,
   adminLogin,
   changePassword
   
}