const mongoose = require('mongoose');
const LikeSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    blogId: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog' },
});