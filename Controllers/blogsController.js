const Blog = require('../Models/blogsModel');

exports.createBlog = async (req, res) => {
    try {
        const { title, content, tags } = req.body;
        const newBlog = new Blog({ userId: req.user.id, title, content, tags });
        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.blogId);
        if (blog.userId.toString() !== req.user.id) {
            return res.status(403).json({ message: "Not authorized to update this blog" });
        }
        Object.assign(blog, req.body);
        await blog.save();
        res.status(200).json(blog);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.blogId);
        if (blog.userId.toString() !== req.user.id) {
            return res.status(403).json({ message: "Not authorized to delete this blog" });
        }
        await blog.remove();
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.blogId).populate('userId');
        res.status(200).json(blog);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};