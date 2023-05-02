const ClientServices = require('../Services/client.service.js');

module.exports = {
    createClient: async (req, res) => {
        try {
            const client_data = req.body;
            const result = await ClientServices.createClient(client_data);
            res.status(200).json({ message: "Client created successfully", result });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    getAllClient: async (req, res) => {
        try {
            const result = await ClientServices.getAllClient();
            res.json({ message: "All clients", result });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    getClientById: async (req, res) => {
        try {
            const id = req.params.id;
            const result = await ClientServices.getClientById(id);

            if (!result) {
                throw new Error("Client not found");
            }

            res.json({ message: "Client by id", result });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    updateClient: async (req, res) => {
        try {
            const id = req.params.id;
            const client_data = req.body;
            const result = await ClientServices.updateClient(id, client_data);

            if (!result) {
                throw new Error("Client not found");
            }

            res.json({ message: "Client updated successfully", result });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
}