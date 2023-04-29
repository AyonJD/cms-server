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
        
    } catch (error) {
        throw new Error(error);
    }
}