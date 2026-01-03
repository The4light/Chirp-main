const express = require('express');
const router = express.Router();

const postController = require('../controllers/post.controller')

router.post('/posts', postController.createPost);
router.get('/posts', postController.getPosts);
router.get('/posts/:id', postController.getPostById)
router.delete('/posts/:id', postController.deletePostById)


module.exports = router;