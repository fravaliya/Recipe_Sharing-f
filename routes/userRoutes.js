const express = require('express');
const router = express.Router();
const User = require("../models/users.js");
const userController = require('../controllers/userController.js');

router.use(express.urlencoded({extended : true}));

router.route('/register')
    .get(userController.renderSignupForm)
    .post(userController.signup);

router.route('/login')
    .get(userController.renderLoginForm)
    .post(userController.login);

router.get('/logout', userController.logout);

module.exports = router;