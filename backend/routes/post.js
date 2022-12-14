const express = require('express');
const router = express.Router();
const postController = require('../controllers/post');
const bodyParser= require('body-parser');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.use(bodyParser.json());

// for the posts
router.post('/', auth, multer, postController.addPost);
router.get('/', auth, postController.getAllPosts);
router.get('/post/:employeeID', auth, postController.getUsersPosts);
// router.get('/post/:postID', auth, postController.getOnePost);
router.delete('/post', auth, postController.deletePost);
router.put('/post/:postID/read', auth, postController.readPost)

// for the comments
router.post('/post/:postID/addComment',auth, postController.addComment);
router.get('/post/:postID/allComments', auth, postController.getAllComments);
router.delete('/post/deleteComment', auth, postController.deleteComment);

module.exports = router;