const express = require('express');
const { verifyAdmin } = require('../Middlewares/verifyAdmin.middleware.js');
const { createClient, getAllClient, getClientById, updateClient } = require('../Controllers/client.controller');
const { CREATE_CLIENT, GET_ALL_CLIENT, GET_CLIENT_BY_ID, UPDATE_CLIENT_BY_ID } = require('../Utils/Urls.js');
const router = express.Router();

router.post(CREATE_CLIENT, verifyAdmin, createClient);
router.get(GET_ALL_CLIENT, verifyAdmin, getAllClient);
router.get(GET_CLIENT_BY_ID, verifyAdmin, getClientById);
router.patch(UPDATE_CLIENT_BY_ID, verifyAdmin, updateClient)

module.exports = router;