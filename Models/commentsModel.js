const mongoose = require('mongoose');
const CommentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    blogId: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog' },
    content: { type: String, required: true },
});