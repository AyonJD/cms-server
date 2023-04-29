const express = require('express')
const { signUpUser, loginUser } = require('../Controllers/auth.controller.js');
const { SIGNUP_URL, LOGIN_URL } = require('../Utils/Urls.js');
const router = express.Router();

router.post(SIGNUP_URL, signUpUser);
router.post(LOGIN_URL, loginUser);

module.exports = router;