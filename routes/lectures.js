const express = require('express');
const router = express.Router();

const lectureController = require('../controllers/lectureController');

router.post('/get', lectureController.getLectures);
router.use('/time', lectureController.getTimes);

module.exports = router;