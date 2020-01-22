const express = require('express');
const router = express.Router();

const users = require('./users');
const logins = require('./logins');
const comments = require('./comments');

const students = require('./students');
const lectures = require('./lectures');
const attendances = require('./attendances');

require('dotenv').config();

router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.send(process.env.DB_USER);
});


router.use('/users', users);
router.use('/logins', logins);
router.use('/comments', comments);

router.use('/students', students);
router.use('/lectures', lectures);
router.use('/attendances', attendances);

module.exports = router;
