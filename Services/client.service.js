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

        if (client_data.clientName) {
            client.clientName = client_data.clientName;
        }
        if (client_data.clientEmail) {
            client.clientEmail = client_data.clientEmail;
        }
        if (client_data.clientPhone) {
            client.clientPhone = client_data.clientPhone;
        }
        if (client_data.clientAddress) {
            client.clientAddress = client_data.clientAddress;
        }
        if (client_data.clientServices) {
            client.clientServices = client_data.clientServices;
        }
        if (client_data.status) {
            client.status = client_data.status;
        }
        if (client_data.paymentTracker) {
            client.paymentTracker = client_data.paymentTracker;
        }
        if (client_data.serviceStates) {
            client.serviceStates = client_data.serviceStates;
        }
        if (client_data.totalPayment) {
            client.totalPayment = client_data.totalPayment;
        }
        if (client_data.totalPaid) {
            client.totalPaid = client_data.totalPaid;
        }
        if (client_data.currentlyDue) {
            client.currentlyDue = client_data.currentlyDue;
        }

        const result = await ClientModel.updateOne({ _id: id }, { $set: client });

        if (result.nModified === 0) {
            throw new Error("Failed to update service");
        }
        return client;

    } catch (error) {
        throw new Error(error);
    }
}