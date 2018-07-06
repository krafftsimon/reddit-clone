const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db');

const router = express.Router();
const urlencodedParser = bodyParser.urlencoded({extended: false});

router.get('/posts/new', (req, res) => {
  db.query('SELECT * FROM posts ORDER BY created_at ASC')
    .then(result => {
      res.status(200).send(result.rows);
    })
    .catch(err => {
      console.log(err);
    });
})

router.get('/posts/top', (req, res) => {
  db.query('SELECT * FROM posts ORDER BY score DESC')
    .then(result => {
      res.status(200).send(result.rows);
    })
    .catch(err => {
      console.log(err);
    });
})

router.delete('/posts/:postId', (req, res) => {
  db.query('DELETE FROM posts WHERE id = $1', [req.params.postId])
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
})

router.post('/posts', urlencodedParser, (req, res) => {
  const {title, contentType, content} = req.body;
  db.query('INSERT into posts(title, created_at, content_type, content) VALUES ($1, localtimestamp, $2, $3)', [title, contentType, content])
    .then(result => {
      res.status(200).send('Post sucessfully created!');
    })
    .catch(err => {
      console.log(err);
    });
})

router.get('/posts/insert', (req, res) => {
  let title = 'Second post, this is a test.';
  let score = 78;
  let content_type = 'txt';
  let text = `Not until the next section of the raid opens, 
  which is TBD, will we know if our efforts will have made
  a difference, but if we don''t try, then we''ve already
  failed. Lore behind [Net Neutrality]: The basic principle
  of Net Neutrality is that access to all websites and web
  services should be equal and that anyone can start their
  own website/service and make it accessible to anyone with
  internet access, just like any other website/service.
  Without Net Neutrality, your Internet Service Provider
  (e.g. BT) could arbitrarily block whatever websites it 
  didn''t want you to access (e.g. perhaps blocking you from 
  accessing competitors'' websites). It could also mean your 
  service provider purposefully degrades access to certain 
  websites or services and/or forces you to pay extra to access 
  certain websites or services (imagine paying an extra $5 a month 
  to your service provider just because you want to access reddit).
  In the UK, this is not as big of a problem because there is (for 
  the most part) much more competition because the BT network is 
  opened up through a wholeale program which allows third-party 
  providers to access the network and provide their own differentiated/custom 
  internet services (to some extent). In the US, however, there 
  isn''t really competition like this. Many homes have only one 
  broadband internet service provider to choose from (e.g. their 
  local telephone company) and some people are lucky enough to 
  have two providers (e.g. telephone and cable company) or in 
  very rare cases three providers (e.g. telephone, cable and 
  independent fiber/fibre company). Basically though, there is 
  hardly any competition which means that if one service provider 
  starts violating the principles of Net Neutrality, many customers 
  are completely powerless (since they have such a limited or 
  perhaps no alternative selection for ISPs).`;
  db.query('INSERT into posts(title, score, created_at, content_type, content) VALUES ($1, $2, localtimestamp, $3, $4)', [title, score, content_type, text])
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
})

module.exports = router;