const ServiceServices = require('../Services/service.service.js');

module.exports = {
    createService: async (req, res) => {
        try {
            const service_data = req.body;
            const result = await ServiceServices.createService(service_data);
            res.status(200).json({ message: "Service created successfully", result });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    getAllService: async (req, res) => {
        try {
            const result = await ServiceServices.getAllService();
            res.json({ message: "All services", result });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    getServiceById: async (req, res) => {
        try {
            const id = req.params.id;
            const result = await ServiceServices.getServiceById(id);

            if (!result) {
                throw new Error("Service not found");
            }

            res.json({ message: "Service by id", result });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    updateService: async (req, res) => {
        try {
            const id = req.params.id;
            const service_data = req.body;
            const result = await ServiceServices.updateService(id, service_data);

            if (!result) {
                throw new Error("Service not found");
            }

            res.json({ message: "Service updated successfully", result });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}