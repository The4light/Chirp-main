const Post = require('../models/Post');

exports.getTrendingPosts = async (req, res) => {
  try {
    const hours = 24;
    const since = new Date(Date.now() - hours * 60 * 60 * 1000);

    const posts = await Post.find({
      createdAt: { $gte: since }
    })
      .sort({ likeCount: -1, createdAt: -1 })
      .limit(20)
      .populate('authorId', 'username email');

    return res.status(200).json({
      window: `${hours}h`,
      count: posts.length,
      posts
    });
  } catch (err) {
    console.error('TRENDING ERROR:', err);
    return res.status(500).json({ error: err.message });
  }
};
