const express = require('express');
const router = express.Router();

const users = require('./users');
const logins = require('./logins');
const comments = require('./comments');

require('dotenv').config();

router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.send(process.env.DB_USER);
});


router.use('/users', users);
router.use('/logins', logins);
router.use('/comments', comments);

module.exports = router;
