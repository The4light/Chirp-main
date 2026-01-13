const express = require('express');
const router = express.Router();

const trendingController = require('../controllers/trending.controller');

router.get('/', trendingController.getTrendingPosts);

module.exports = router;
