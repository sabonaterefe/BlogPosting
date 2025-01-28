const Comment = require('../Models/commentsModel');

exports.createComment = async (req, res) => {
    try {
        const { blogId, content } = req.body;
        const newComment = new Comment({ userId: req.user.id, blogId, content });
        await newComment.save();
        res.status(201).json(newComment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.editComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.commentId);
        if (comment.userId.toString() !== req.user.id) {
            return res.status(403).json({ message: "Not authorized to edit this comment" });
        }
        comment.content = req.body.content;
        await comment.save();
        res.status(200).json(comment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.commentId);
        if (comment.userId.toString() !== req.user.id) {
            return res.status(403).json({ message: "Not authorized to delete this comment" });
        }
        await comment.remove();
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};