const express = require('express');
const router = express.Router();

const lectureController = require('../controllers/lectureController');

router.use('/get', lectureController.getLectures);

module.exports = router;