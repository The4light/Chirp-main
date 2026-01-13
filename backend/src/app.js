const express = require('express');
const app = express();

//middleware
app.use(express.json());
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});


// routes
const authRoutes = require('./routes/auth.routes');
const trendingRoutes = require('./routes/trending.routes');
const postRoutes = require('./routes/posts.routes');
const feedRoutes = require('./routes/feed.routes');
const likeRoutes = require('./routes/likes.routes');
const searchRoutes = require('./routes/search.routes');

app.use('/auth', authRoutes);

// 🔥 TRENDING FIRST (even with namespace)
app.use('/posts/trending', trendingRoutes);

// then posts
app.use('/posts', postRoutes);

app.use('/feed', feedRoutes);
app.use('/', likeRoutes);
app.use('/search', searchRoutes);

module.exports = app;
