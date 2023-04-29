const express = require('express');
const { verifyAdmin } = require('../Middlewares/verifyAdmin.middleware.js');
const { SEND_EMAIL_TO_CLIENT, GET_ALL_MEETING, DELETE_MEETING_BY_ID } = require('../Utils/Urls.js');
const { sendEmailToClient, getAllMeetings, deleteMeeting } = require('../Controllers/meeting.controller.js');
const router = express.Router();

router.post(SEND_EMAIL_TO_CLIENT, verifyAdmin, sendEmailToClient);
router.get(GET_ALL_MEETING, verifyAdmin, getAllMeetings);
router.delete(DELETE_MEETING_BY_ID, verifyAdmin, deleteMeeting)

module.exports = router;