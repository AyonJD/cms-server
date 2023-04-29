const express = require('express')
const { LOGGED_IN_USER } = require('../Utils/Urls.js');
const { loggedInUser } = require('../Controllers/user.controller.js');
const router = express.Router();

router.get(LOGGED_IN_USER, loggedInUser);

module.exports = router;