const express = require('express');
const router  = express.Router();

const feedController = require('../controllers/feed.controller');

router.get('/feed', feedController.getPostByOrder);

module.exports = router;