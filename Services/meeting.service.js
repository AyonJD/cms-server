const ClientModel = require('../Models/client.model.js');
const MeetingModel = require('../Models/meeting.model.js');
const { sendEmail } = require('./mailer.service.js');

exports.createMeeting = async function (meeting_data) {
    try {
        const {
            subject,
            message,
            meetingDate,
            meetingTime,
            clientId,
            senderId
        } = meeting_data;
        const emailFrom = process.env.APP_EMAIL;

        if (subject === null || subject === "") {
            throw new Error("Subject is required");
        } else if (message === null || message === "") {
            throw new Error("Message is required");
        } else if (meetingDate === null || meetingDate === "") {
            throw new Error("Meeting date is required");
        } else if (meetingTime === null || meetingTime === "") {
            throw new Error("Meeting time is required");
        } else if (meetingDate < new Date()) {
            throw new Error("Meeting date cannot be in the past");
        } else if (meetingTime < new Date()) {
            throw new Error("Meeting time cannot be in the past");
        } else if (clientId === null || clientId === "") {
            throw new Error("Client is required");
        } else if (senderId === null || senderId === "") {
            throw new Error("Sender is required");
        }

        // get the client's email
        const client = await ClientModel.findById({ _id: clientId });

        if (!client) {
            throw new Error("Client not found");
        }

        // send email to the client
        const sendEmailStauts = await sendEmail(client.clientEmail, subject, message);

        if (sendEmailStauts.accepted.length === 0) {
            throw new Error('Email not sent');
        }

        // Data to save in the database
        const meeting_data_to_save = {
            clientName: client.clientName,
            subject,
            message,
            meetingDate,
            meetingTime,
            clientId,
            senderId,
            emailFrom,
            emailTo: client.clientEmail
        };

        const newMeeting = new MeetingModel(meeting_data_to_save);
        const result = await newMeeting.save();
        return result;

    } catch (error) {
        throw new Error(error);
    }
}

exports.getAllMeetings = async function () {
    try {
        const meetings = await MeetingModel.find();
        return meetings;
    } catch (error) {
        throw new Error(error);
    }
}

exports.deleteMeeting = async function (meetingId) {
    try {
        const meeting = await MeetingModel.findByIdAndDelete({ _id: meetingId });
        return meeting;
    } catch (error) {
        throw new Error(error);
    }
}