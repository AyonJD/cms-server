const ClientModel = require('../Models/client.model.js');

exports.createClient = async function (client_data) {
    try {
        const {
            clientName,
            clientEmail,
            clientPhone,
            clientAddress
        } = client_data;

        const newClient = new ClientModel(client_data);

        if (clientName === null || clientName === "") {
            throw new Error("Client name is required");
        } else if (clientEmail === null || clientEmail === "") {
            throw new Error("Client email is required");
        } else if (clientPhone === null || clientPhone === "") {
            throw new Error("Client phone is required");
        } else if (clientAddress === null || clientAddress === "") {
            throw new Error("Client address is required");
        }

        const client = await ClientModel.findOne({ clientEmail });

        if (client) {
            throw new Error("Client already exists, please update the client or create a new one");
        }

        const result = await newClient.save();
        return result;

    } catch (error) {
        throw new Error(error);
    }
}

exports.getAllClient = async function () {
    try {
        const clients = await ClientModel.find();
        return clients;
    } catch (error) {
        throw new Error(error);
    }
}

exports.getClientById = async function (id) {
    try {
        const client = await ClientModel.findById(id);
        return client;
    } catch (error) {
        throw new Error(error);
    }
}

exports.updateClient = async function (id, client_data) {
    try {
        const client = await ClientModel.findById(id);
        if (!client) {
            throw new Error("Client not found");
        }

        const updateObj = { $set: {} };

        Object.keys(client_data).forEach(key => {
            updateObj.$set[key] = client_data[key];
        });

        const result = await ClientModel.updateOne({ _id: id }, updateObj);

        if (result.nModified === 0) {
            throw new Error("Failed to update service");
        }
        
        return client;

    } catch (error) {
        throw new Error(error);
    }
}