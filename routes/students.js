const express = require('express');
const router = express.Router();

const studentController = require('../controllers/studentController');

router.get('/get', studentController.getStudents);

module.exports = router;