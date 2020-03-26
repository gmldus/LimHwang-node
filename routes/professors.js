const express = require('express');
const router = express.Router();

const professorController = require('../controllers/professorController');

router.use('/get', professorController.doLogins);

module.exports = router;