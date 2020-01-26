const express = require('express');
const router = express.Router();

const lectureController = require('../controllers/lectureController');

router.post('/get', lectureController.getLectures);

module.exports = router;