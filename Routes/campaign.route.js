const express = require('express');
const { verifyAdmin } = require('../Middlewares/verifyAdmin.middleware.js');
const { SEND_EMAIL_TO_CLIENTS, GET_CAMPAIGN_BY_ID, GET_ALL_CAMPAIGN, DELETE_CAMPAIGN_BY_ID } = require('../Utils/Urls.js');
const { sendEmailToClients, getCampaignById, getAllCampaigns, deleteCampaign } = require('../Controllers/campaign.controller.js');
const router = express.Router();

router.post(SEND_EMAIL_TO_CLIENTS, verifyAdmin, sendEmailToClients);
router.get(GET_CAMPAIGN_BY_ID, verifyAdmin, getCampaignById);
router.get(GET_ALL_CAMPAIGN, verifyAdmin, getAllCampaigns);
router.delete(DELETE_CAMPAIGN_BY_ID, verifyAdmin, deleteCampaign);

module.exports = router;