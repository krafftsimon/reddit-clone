const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const postsRouter = require('./routes/posts');

const app = express();

app.use(cors());
app.use('/api', postsRouter);
app.use(express.static(path.join(__dirname, '..', 'build')))
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../build/index.html')));

const port = 3000;
app.listen(port, () => console.log(`Reddit clone app listening on port ${port}.`));