const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const authenticate = require('./Middleware/jws');

const UserController = require('./Controllers/usersController');
const BlogController = require('./Controllers/blogsController');
const RatingController = require('./Controllers/blogRatingController');
const CommentController = require('./Controllers/commentsController');
const LikeController = require('./Controllers/likesController');

dotenv.config();
const app = express();


app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));


app.post('/api/users/register', UserController.register);
app.post('/api/users/login', UserController.login);
app.get('/api/users/profile', authenticate, UserController.getProfile);


app.post('/api/blogs', authenticate, BlogController.createBlog);
app.put('/api/blogs/:blogId', authenticate, BlogController.updateBlog);
app.delete('/api/blogs/:blogId', authenticate, BlogController.deleteBlog);
app.get('/api/blogs/:blogId', BlogController.getBlog);


app.post('/api/blog-ratings', authenticate, RatingController.rateBlog);


app.post('/api/comments', authenticate, CommentController.createComment);
app.put('/api/comments/:commentId', authenticate, CommentController.editComment);
app.delete('/api/comments/:commentId', authenticate, CommentController.deleteComment);


app.post('/api/likes', authenticate, LikeController.likeBlog);
app.delete('/api/likes/:blogId', authenticate, LikeController.unlikeBlog);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});