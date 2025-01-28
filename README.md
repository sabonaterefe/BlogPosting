
## Description
This project is a Node.js, express with mongodb application designed for user and blog management. It provides functionalities for user registration, login, profile management, and blog creation, along with features for commenting, liking, and rating blogs.

## Technologies Used
- Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- Express: A web application framework for Node.js to build APIs easily.
- MongoDB: A NoSQL database for storing user and blog data.
- Mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- dotenv: A module to load environment variables from a `.env` file into `process.env`.
- body-parser: Middleware for parsing incoming request bodies.
- JSON Web Token (JWT): A compact URL-safe means of representing claims to be transferred between two parties.
## Setup Instructions
1. Clone the Repository:
   git clone : https://github.com/sabonaterefe/BlogPosting.git
2. Navigate to the Project Directory:
cd ur project name 
3. Install Dependencies:
Make sure you have Node.js and npm installed. 
Then run:
npm install
4. Create a .env File:
In the root directory, create a .env file and add the following:
MONGO_URI=mongodb://urs mongo uri
PORT=3000
5. Run the Application:
Start the server by running:
node App.js
6. Access the API:
You can access the API endpoints at http://localhost:3000/api/.

API Endpoints:

-User Registration: POST /api/users/register

-User Login: POST /api/users/login

-User Profile: GET /api/users/profile (Requires authentication)

-Create Blog: POST /api/blogs (Requires authentication)

-Update Blog: PUT /api/blogs/:blogId (Requires authentication)

-Delete Blog: DELETE /api/blogs/:blogId (Requires authentication)

-Get Blog: GET /api/blogs/:blogId

-Rate Blog: POST /api/blog-ratings (Requires authentication)

-Create Comment: POST /api/comments (Requires authentication)

-Edit Comment: PUT /api/comments/:commentId (Requires authentication)

-Delete Comment: DELETE /api/comments/:commentId (Requires authentication)

-Like Blog: POST /api/likes (Requires authentication)

-Unlike Blog: DELETE /api/likes/:blogId (Requires authentication)
