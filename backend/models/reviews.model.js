const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewsSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
    },
    star: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    reviewMessage: {
        type: String,
        required: true
    },
    reviewStatus: {
        type: Boolean,
        default: false,
    }
},
    {
        timestamps: true,
    }
)

const Reviews = mongoose.model('customerReviews', reviewsSchema);

module.exports = Reviews;