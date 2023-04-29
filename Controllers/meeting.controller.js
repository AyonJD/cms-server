const MeetingServices = require('../Services/meeting.service');

module.exports = {
    sendEmailToClient: async (req, res) => {
        try {
            const meeting_data = req.body;
            const result = await MeetingServices.createMeeting(meeting_data);
            res.status(200).json({ message: "Meeting created successfully", result });

        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    getAllMeetings: async (req, res) => {
        try {
            const result = await MeetingServices.getAllMeetings();
            res.json({ message: "All meetings", result });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    deleteMeeting: async (req, res) => {
        try {
            const id = req.params.id;
            const result = await MeetingServices.deleteMeeting(id);

            if (!result) {
                throw new Error("Meeting not found");
            }

            res.json({ message: "Meeting deleted successfully", result });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
}