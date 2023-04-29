const mongoose = require('mongoose');

const MeetingSchema = new mongoose.Schema({
    clientName: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    meetingDate: {
        type: Date,
        required: true
    },
    meetingTime: {
        type: String,
        required: true
    },
    clientId: {
        type: String,
        required: true
    },
    senderId: {
        type: String,
        required: true
    },
    emailFrom: {
        type: String,
        required: true
    },
    emailTo: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true
    },
}, { timestamps: true });

const Meeting = mongoose.model('Meeting', MeetingSchema);

module.exports = Meeting;