const ServiceModel = require('../Models/service.model.js');

exports.createService = async function (service_data) {
    try {
        const {
            title,
            description,
            icon,
            servicePaymentInfo
        } = service_data;

        if (title === null || title === "") {
            throw new Error("Service title is required");
        } else if (description === null || description === "") {
            throw new Error("Service description is required");
        } else if (icon === null || icon === "") {
            throw new Error("Service icon is required");
        } else if (servicePaymentInfo < 0 || servicePaymentInfo === 0) {
            throw new Error("Service payment info cannot be negative or zero");
        }

        const service = await ServiceModel.findOne({ title });

        if (service) {
            throw new Error("Service already exists, please update the service or create a new one");
        }

        const newService = new ServiceModel(service_data);
        const result = await newService.save();
        return result;

    } catch (error) {
        throw new Error(error);
    }
}

exports.getAllService = async function () {
    try {
        const services = await ServiceModel.find();
        return services;
    } catch (error) {
        throw new Error(error);
    }
}

exports.getServiceById = async function (id) {
    try {
        const service = await ServiceModel.findById(id);
        return service;
    } catch (error) {
        throw new Error(error);
    }
}

exports.updateService = async function (id, service_data) {
    try {
        const service = await ServiceModel.findById(id);
        if (!service) {
            throw new Error("Service not found");
        }

        // Validate input data
        if (service_data.title) {
            service.title = service_data.title;
        }
        if (service_data.description) {
            service.description = service_data.description;
        }
        if (service_data.icon) {
            service.icon = service_data.icon;
        }
        if (service_data.servicePaymentInfo > 0) {
            service.servicePaymentInfo = service_data.servicePaymentInfo;
        }

        // Save updated service object
        const result = await ServiceModel.updateOne({ _id: id }, { $set: service });

        if (result.nModified === 0) {
            throw new Error("Failed to update service");
        }

        return service;

    } catch (error) {
        throw new Error(error);
    }
}