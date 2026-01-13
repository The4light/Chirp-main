const User = require('../models/User');
const Post = require('../models/Post');

exports.searchUsers = async (req, res) => {
  try {
    const q = req.query.q;

    if (!q) {
      return res.status(400).json({ message: 'Query is required' });
    }

    const users = await User.find({
      username: { $regex: q, $options: 'i' },
    })
      .select('username email')
      .limit(10);

    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.searchPosts = async (req, res) => {
  try {
    const q = req.query.q;

    if (!q) {
      return res.status(400).json({ message: 'Query is required' });
    }

    const posts = await Post.find({
      content: { $regex: q, $options: 'i' },
    })
      .sort({ createdAt: -1 })
      .limit(20)
      .populate('authorId', 'username email');

    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
