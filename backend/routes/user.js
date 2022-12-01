const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const cors = require('cors');
const bodyParser= require('body-parser');

router.use(bodyParser.json());

router.post('/signup', userController.signup);
router.post('/signin', userController.signin);

module.exports = router;