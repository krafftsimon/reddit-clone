const express = require('express');
const db = require('../db');

const router = express.Router();


router.get('/posts', (req, res) => {
  res.send('fetching posts');
})

router.get('/test', (req, res) => {
  db.query('SELECT * FROM posts')
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log(err);
    })
})

module.exports = router;