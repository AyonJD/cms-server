const CampaignServices = require('../Services/campaign.service');

exports.sendEmailToClients = async (req, res) => {
    try {
        const campaign_data = req.body;
        const result = await CampaignServices.createCampaign(campaign_data);
        res.status(200).json({ message: "Campaign created successfully", result });

    } catch (error) {
        res.status(400).json({ message: error });
    }
};

module.exports = {
    sendEmailToClients: async (req, res) => {
        try {
            const campaign_data = req.body;
            const result = await CampaignServices.createCampaign(campaign_data);
            res.status(200).json({ message: "Campaign created successfully", result });

        } catch (error) {
            res.status(400).json({ message: error });
        }
    },
    getAllCampaigns: async (req, res) => {
        try {
            const result = await CampaignServices.getAllCampaigns();
            res.json({ message: "All campaigns", result });
        } catch (error) {
            res.status(400).json({ message: error });
        }
    },
    getCampaignById: async (req, res) => {
        try {
            const id = req.params.id;
            const result = await CampaignServices.getCampaignById(id);

            if (!result) {
                throw new Error("Campaign not found");
            }

            res.json({ message: "Campaign by id", result });
        } catch (error) {
            res.status(400).json({ message: error });
        }
    },
    deleteCampaign: async (req, res) => {
        try {
            const id = req.params.id;
            const result = await CampaignServices.deleteCampaign(id);

            if (!result) {
                throw new Error("Campaign not found");
            }

            res.json({ message: "Campaign deleted successfully", result });
        } catch (error) {
            res.status(400).json({ message: error });
        }
    }
}