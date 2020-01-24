const express = require('express');
const router = express.Router();

const attendanceController = require('../controllers/attendanceController');

router.use('/get', attendanceController.getAttendances);

module.exports = router;