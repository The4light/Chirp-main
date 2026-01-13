const express = require('express');
const router = express.Router();

const likeController = require('../controllers/like.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/posts/:id/like', authMiddleware.protect, likeController.likePost);
router.post('/posts/:id/unlike', authMiddleware.protect, likeController.unlikePost);

module.exports = router;
