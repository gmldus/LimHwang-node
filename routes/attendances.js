const express = require('express');
const router = express.Router();

const attendanceController = require('../controllers/attendanceController');

router.use('/get', attendanceController.getAttendances);
router.use('/update', attendanceController.updateAttendances);

module.exports = router;