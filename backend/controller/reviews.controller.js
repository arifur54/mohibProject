const Reviews = require('../models/reviews.model');
const transporter = require("../config/transporter");



let getAllStatus = async function(req, res){
    //get all reviews based on status === true
    try{
        let allReviews = await Reviews.find({})
        if(!allReviews || allReviews.length === 0){
            res.send({
                errorMsg: "No Review found!"
            })
            return
        }
       
        let sortedReviews = allReviews.filter((review) =>{
            return review.reviewStatus === true
        })

        if(!sortedReviews || sortedReviews.length === 0){
            res.send({
                errorMsg: "No reivew was found with status of true"
            })

            return
        }

        let totalSortedReviews = sortedReviews.length;
        res.status(200).send({
            msg: `${totalSortedReviews} reviews were found that has a status of true`,
            data: sortedReviews
        })
    }catch(error){
        res.status(404).send({
            errorMsg: "Something went wrong",
            error: error
        })
    }
}

let submitReview = async function(req, res){
    // Submit a review from database
    const {name, email, star, description, reviewMessage} = req.body;

    const sendReviewMessage = {
        from: email,
        to: "arifur.r.1992@gmail.com",
        subject: `Client Review: ${name}`,
        text: `
                email: ${email}
                star: ${star} 
                description: ${description}
                message: ${reviewMessage}
             `
        
        // Try to add html formating later
    }

    try{
        let reviewInfo = await transporter.sendMail(sendReviewMessage)
        let reviewData = await Reviews.create({
            name, email, star, description, reviewMessage
        })

        if(reviewInfo && reviewData){
           res.send({
            msg: "Your Review has been submitted",
            data: reviewData,
            info: reviewInfo
           })
        }

    }catch(error){
        res.send({
            error: error
        })
    }
}

let setReviewStatusTrue = async function(req, res){
    // Set a specific review status so it can be shown in front end. 
    try{
        const reviewDesc = await Reviews.findById(req.params.id);
        if(!reviewDesc){
            res.status(404).send({
                errorMsg: "description Not Found!"  
              })  
        }

        if(reviewDesc.reviewStatus === false){
            reviewDesc.reviewStatus = true
        }
     
        let changedStatus = await reviewDesc.save();

        if(changedStatus){
            res.status(200).send({
                msg: `Review status changed to: ${reviewDesc.reviewStatus}, this review will now be displayed 
                in the main page.`
            })
        }


    }catch(error){
        res.status(404).send({
            errorMsg: "Something Went Wrong :(",
            error: error
        })
    }
}

let setReviewStatusFalse = async function(req, res) {
    
    try{
        const reviewDesc = await Reviews.findById(req.params.id);
        if(!reviewDesc){
            res.status(404).send({
                errorMsg: "description Not Found!"  
              })  
        }

        if(reviewDesc.reviewStatus === true){
            reviewDesc.reviewStatus = false
        }

        
        let changedStatus = await reviewDesc.save();

        if(changedStatus){
            res.status(200).send({
                msg: `Review status changed to: ${reviewDesc.reviewStatus}, this review will now be removed from main page.          in the main page.`
            })
        }

    }catch(error){
        res.send({
            errorMsg: "Something went wrong :(",
            error: error
        })
    }
}

let deleteReview = async function(req, res){
    // Delete a specific review
    
    try{
        const reviewDesc = await Reviews.findById(req.params.id);
        if(!reviewDesc){
            res.send({
                errorMsg: "Review not found"
            })
            return
        }

        await reviewDesc.delete();
        res.status(200).send({
            msg: `Review was deleted successfully`
        })

    }catch(error){
        res.status(404).send({
            errorMsg: "Something went wrong",
            error: error
        })
    }
}

module.exports = {
    getAllStatus,
    submitReview,
    setReviewStatusTrue,
    setReviewStatusFalse,
    deleteReview
}