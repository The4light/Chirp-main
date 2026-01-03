const express = require('express'); // require express
const app = express(); // initialize the application and store the express object in a constant app i guess

const feedRoute = require('./routes/feed.routes');
const postRoute = require('./routes/posts.routes');

app.use(express.json());

app.use('/api', feedRoute)

app.use('/api', postRoute)

module.exports = app;

