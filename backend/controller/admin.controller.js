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
            errorMsg: "Error getting admins",
            error: error.message
        })
    }
}

let addAdmin = async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;
    console.log(req.body)
    if(!username || typeof username !== 'string'){
        return res.status(401).json({errorMsg: 'Invalid username'})
    }

    if(!email || typeof email !== 'string'){
        return res.status(401).json({errorMsg: 'Invalid email'})
    }

    if(!password){
        return res.status(401).json({errorMsg: 'Password cannot be empty'})
    }

    if(password.length < 8){
        return res.status(401).json({errorMsg: 'Password must be minmum of 8 char long'})
    }
    
    if(confirmPassword.length < 8){
        return res.status(401).json({errorMsg: 'Confirm Password must be minmum of 8 char long'})
    }

    if(password != confirmPassword){
        return res.status(401).json({errorMsg: 'Password and Confirm Password doesnot match'})
    }

    let adminEmailExists;
    let adminUserNameExits;
    try{
        adminEmailExists = await Admin.findOne({email: req.body.email})
        adminUserNameExits = await Admin.findOne({username: req.body.username});
        if(adminEmailExists){
            res.status(401).send({
                errorMsg: "Admin Email already exists! Email and Username must be unique"
            })

        }else if(adminUserNameExits){
            res.status(401).send({
                errorMsg: "Admin Username already exists! Email and Username must be unique"
            })
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
                // Need to find a way to handle jwt expires
                const token = jwt.sign({adminData}, process.env.JWT_SECRET, {expiresIn: '1d'})
                res.status(200).send({
                    msg: "Authentication Confirmed",
                    token: token,
                    data: adminData
                })  
            }else{
                res.send({
                    errorMsg: "Wrong password entered"
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
    try{
        // const admin = jwt.verify(token, process.env.JWT_SECRET)
        adminExists = await Admin.findOne({email: req.body.email});
        if(!adminExists){
            res.status(404).send({
                status: 'error',
                msg: 'Admin not found'
            })
        }
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        const _id = adminExists.id
        await Admin.updateOne({_id} , {
            $set: {password: hashedPassword}
        } )

        res.status(200).send({
            msg:"Password updated successfully"
        })

    }catch(error){
        res.status(404).send({
            errorMsg: "Something Went wrong :(",
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