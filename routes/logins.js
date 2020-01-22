const express = require('express');
const router = express.Router();

const loginController = require('../controllers/loginController')

router.use('/get', loginController.getLogins);
router.use('/create', loginController.createLogins);

module.exports = router;