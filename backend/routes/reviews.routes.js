const express = require('express');
const router = express.Router();
const Reviews = require('../controller/reviews.controller');
const authenticateToken = require('../config/validateUser');


router.get('/get_all', authenticateToken ,Reviews.getAll);

router.get('/get_all_status', Reviews.getAllStatus);

router.post('/submit_review', Reviews.submitReview);

// Need to add authenticateToken here but giving errors
router.post('/set_review_status/:id', Reviews.setReviewStatus);

router.delete('/delete_review/:id',authenticateToken ,Reviews.deleteReview);

module.exports = router;