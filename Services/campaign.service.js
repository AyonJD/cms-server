const ClientModel = require('../Models/client.model.js');
const CampaignModel = require('../Models/campaign.model.js');
const { sendEmail } = require('./mailer.service.js');

exports.createCampaign = async function (campaign_data) {
    try {
        const {
            subject,
            message,
            startFrom,
            endAt,
            serviceOn, // array of services
            commition,
            creatorId
        } = campaign_data;
        const emailFrom = process.env.APP_EMAIL;

        // get all clients'
        const clients = await ClientModel.find();

        // create an array of client emails
        const clientEmails = clients.map(client => client.clientEmail);

        if (clientEmails === null || clientEmails.length === 0) {
            throw new Error("Email is required");
        } else if (message === null || message === "") {
            throw new Error("Message is required");
        } else if (startFrom === null || startFrom === "") {
            throw new Error("Start date is required");
        } else if (endAt === null || endAt === "") {
            throw new Error("End date is required");
        } else if (startFrom < new Date()) {
            throw new Error("Start date cannot be in the past");
        } else if (endAt < new Date()) {
            throw new Error("End date cannot be in the past");
        } else if (serviceOn === null || serviceOn.length === 0) {
            throw new Error("Service is required");
        } else if (commition === null || commition === "") {
            throw new Error("Commition is required");
        } else if (commition < 0) {
            throw new Error("Commition cannot be negative");
        }

        // send email to all clients
        const sendEmailStauts = await sendEmail(clientEmails, subject, message);

        if (sendEmailStauts.accepted.length === 0) {
            throw new Error('Email not sent');
        }

        // Find the service selected --------------------------->Need to work here

        // Data to save in the database
        const campaign_data_to_save = {
            subject,
            emailTo: clientEmails,
            message,
            startFrom,
            endAt,
            serviceOn,
            creatorId,
            emailFrom,
            commition
        };

        const newCampaign = await CampaignModel(campaign_data_to_save);
        const result = await newCampaign.save();
        return result;

    } catch (error) {
        throw new Error(error);
    }
}

exports.getAllCampaigns = async function () {
    try {
        const campaigns = await CampaignModel.find();
        return campaigns;
    } catch (error) {
        throw new Error(error);
    }
}

exports.getCampaignById = async function (campaignId) {
    try {
        const campaign = await CampaignModel.findById({ _id: campaignId });
        return campaign;
    } catch (error) {
        throw new Error(error);
    }
}

exports.deleteCampaign = async function (campaignId) {
    try {
        const campaign = await CampaignModel.findByIdAndDelete({ _id: campaignId });
        return campaign;
    } catch (error) {
        throw new Error(error);
    }
}