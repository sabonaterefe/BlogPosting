const mongoose = require('mongoose');
const BlogRatingSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    blogId: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog' },
    ratingValue: { type: Number, min: 1, max: 5 },
});