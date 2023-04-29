const express = require('express');
const { verifyAdmin } = require('../Middlewares/verifyAdmin.middleware.js');
const { CREATE_SERVICE, GET_ALL_SERVICE, UPDATE_SERVICE_BY_ID } = require('../Utils/Urls.js');
const { createService, getAllService, updateService } = require('../Controllers/service.controller.js');
const router = express.Router();

router.post(CREATE_SERVICE, verifyAdmin, createService);
router.get(GET_ALL_SERVICE, verifyAdmin, getAllService);
router.patch(UPDATE_SERVICE_BY_ID, verifyAdmin, updateService);

module.exports = router;