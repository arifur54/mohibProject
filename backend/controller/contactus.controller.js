const Contact = require('../models/contactus.model');
const transporter = require("../config/transporter");



let getAll = async function(req, res) {
    try{
        let all = await Contact.find({})
        if(!all || all.length === 0){
            res.send({
                errorMsg: "No Contact info found."
            })
            return
        }
        res.status(200).send(all)
    }catch(error){
        res.status(400).send({
            errorMsg: "Error Getting Contacts",
            error: error
        })
    }
}


let submitContactUs = async function(req, res){
    // Send Contact us email info from client and store it to database
    const {firstName, lastName, email, phoneNumber, options, customerMessage} = req.body;

    const sendMessage = {
        from: email,
        to: "arif.r.92@gmail.com",
        subject: `Email from potential client: ${firstName} ${lastName}`,
        text: `
               Customer Type: ${options} 
               Phone Number: ${phoneNumber}
               email: ${email}
               message: ${customerMessage}
             `
        
        // Try to add html formating later
    }

    try{
        let infoS = await transporter.sendMail(sendMessage)
        if(infoS){
            let contactData = await Contact.create({
                firstName,
                lastName,
                email,
                phoneNumber,
                options,
                customerMessage
            })

            if(contactData){
                console.log(contactData)
                res.send({
                    msg: "Email send and saved to database",
                    data: contactData
                })
            }   
        }
    }catch(error){
        res.status(400).send({
            errMsg: "Error: Something went wrong",
            err: error,
        })
    }

   
}

let deleteContactinfo = async function(req, res){
    // Delete specific contactus info. 
    try{
        const contactDesc = await Contact.findById(req.params.id);
        if(!contactDesc){
            res.status(404).send({
              errorMsg: "description Not Found!"  
            })
        }

        await contactDesc.delete();
        res.status(200).send({
            msg: `Contact Info has been deleted successfully`
        })

    }catch(error){
        res.status(404).send({
            errorMsg: "Something Went Wrong :(",
            error: error
        })
    }
}

module.exports = {
    getAll,
    submitContactUs,
    deleteContactinfo
}
