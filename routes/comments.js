const express = require('express');
const router = express.Router();

const commentController = require('../controllers/commentController');

router.get('/get', commentController.getComments);

module.exports = router;