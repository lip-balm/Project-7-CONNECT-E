const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const database = require('../database');

router.post('/', userController.signup);
// router.post('/', userController.login);

module.exports = router;