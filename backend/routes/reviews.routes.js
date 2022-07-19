const express = require('express');
const router = express.Router();
const Reviews = require('../controller/reviews.controller');


router.get('/get_all_status', Reviews.getAllStatus);

router.post('/submit_review', Reviews.submitReview);

router.post('/set_review_status_true/:id', Reviews.setReviewStatusTrue);

router.post('/set_review_status_false/:id', Reviews.setReviewStatusFalse);

router.delete('/delete_review/:id', Reviews.deleteReview);

module.exports = router;