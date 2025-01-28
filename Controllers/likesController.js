const Like = require('../Models/likesModel');

exports.likeBlog = async (req, res) => {
    try {
        const { blogId } = req.body;
        const like = new Like({ userId: req.user.id, blogId });
        await like.save();
        res.status(201).json(like);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.unlikeBlog = async (req, res) => {
    try {
        await Like.findOneAndDelete({ userId: req.user.id, blogId: req.params.blogId });
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};