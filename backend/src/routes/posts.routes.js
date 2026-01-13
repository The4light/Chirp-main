const express = require('express');
const router = express.Router();

const postController = require('../controllers/post.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/', authMiddleware.protect, postController.createPost);
router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);
router.delete('/:id', authMiddleware.protect, postController.deletePost);

module.exports = router;
