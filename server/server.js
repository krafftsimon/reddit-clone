const express = require('express');
const path = require('path');
const postsRouter = require('./routes/posts');

const app = express();

app.use('/api', postsRouter);
app.use(express.static(path.join(__dirname, '..', 'build')))
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../build/index.html')));

const port = 3000;
app.listen(port, () => console.log(`Reddit clone app listening on port ${port}.`));