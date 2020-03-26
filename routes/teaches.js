const express = require('express');
const router = express.Router();

const teachController = require('../controllers/teachController');

router.use('/getStudents', teachController.getStudentList);

module.exports = router;