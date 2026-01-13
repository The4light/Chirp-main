const Post = require('../models/Post');

exports.getFeed = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const skip = (page - 1) * limit;

    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .populate('authorId', 'username email');

    res.json({
      page,
      limit,
      count: posts.length,
      posts,
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
