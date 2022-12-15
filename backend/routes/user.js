const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const bodyParser= require('body-parser');
const auth = require('../middleware/auth');

router.use(bodyParser.json());

router.post('/signup', userController.signUp);
router.post('/signin', userController.signIn);
router.get('/profile/:employeeID', auth, userController.getProfile);
// router.get('/profile/:employeeID', auth, userController.getOneProfile);
router.delete('/profile/:employeeID', auth, userController.deleteProfile);

module.exports = router;