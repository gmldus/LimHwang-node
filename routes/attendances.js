const express = require('express');
const router = express.Router();

const attendanceController = require('../controllers/attendanceController');

router.get('/get', attendanceController.getAttendances);

module.exports = router;