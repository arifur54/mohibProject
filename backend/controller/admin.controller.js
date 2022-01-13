const Admin = require('../models/admin.model')
const _ = require('lodash')

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

let addAdmin = async function (req, res) {
    console.log(req.body)
    let reqFields = ['name', 'username', 'password'];
    let addAdmin
    let data = _.pick(req.body, reqFields)
    console.log(data)
    try {
        addAdmin = await Admin.create(data);

        res.status(200).send({
            msg: 'User Added!',
            data: data
        })
    }catch(error) {

        res.status(409).send({
            error: error
        })
    }

}

let adminLogin = async function(req, res) {
    try{
        const user = await Admin.findOne(
            {username: req.body.username,
             password: req.body.password 
            })
        
        console.log(user)
        if(user) {
            return res.status(200).send({
                msg: "Admin Confirm",
                data: user.name
            })
        }else{
            return res.status(403).send({
                msg: "Admin not Confirmed"
            })
        }

    }catch (err) {
        res.status(404).send({
            error: err
        })
    }
}


module.exports = {
   findAll,
   addAdmin,
   adminLogin
}