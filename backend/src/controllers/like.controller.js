const Like = require('../models/Like');
const Post = require('../models/Post');

exports.likePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.user.userId;

    const existingLike = await Like.findOne({ postId, userId });
    if (existingLike) {
      return res.status(400).json({ message: 'Post already liked' });
    }

    await Like.create({ postId, userId });

    await Post.findByIdAndUpdate(postId, {
      $inc: { likeCount: 1 },
    });

    res.json({ message: 'Post liked' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.unlikePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.user.userId;

    const like = await Like.findOneAndDelete({ postId, userId });
    if (!like) {
      return res.status(400).json({ message: 'Post not liked' });
    }

    await Post.findByIdAndUpdate(postId, {
      $inc: { likeCount: -1 },
    });

    res.json({ message: 'Post unliked' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
