const mongoose = require('mongoose');

const CampaignSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true
    },
    emailTo: {
        type: [String],
        required: true,
        unique: true
    },
    message: {
        type: String,
        required: true
    },
    startFrom: {
        type: Date,
        required: true
    },
    endAt: {
        type: Date,
        required: true
    },
    serviceOn: {
        type: [String],
        required: true
    },
    commition: {
        type: String,
        required: true
    },
    creatorId: {
        type: String,
        required: true
    },
    emailFrom: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Campaign = mongoose.model('Campaign', CampaignSchema);

module.exports = Campaign;