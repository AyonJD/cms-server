const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    clientName: {
        type: String,
        required: true,
        unique: true
    },
    clientEmail: {
        type: String,
        required: true,
        unique: true
    },
    clientPhone: {
        type: String,
        required: true,
    },
    clientAddress: {
        type: String,
        required: true,
    },
    clientServices: {
        type: [String],
    },
    status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Inactive"
    },
    paymentTracker: {
        type: [Object],
    },
    serviceStates: {
        type: Object,
        default: {},
    },
    totalPayment: {
        type: Number,
        default: 0
    },
    totalPaid: {
        type: Number,
        default: 0
    },
    currentlyDue: {
        type: Number,
        default: 0
    },
    visaPaymentAmount: {
        type: Number,
        default: 0
    },
    visaPaidAmount: {
        type: Number,
        default: 0
    },
    visaDueAmount: {
        type: Number,
        default: 0
    },
    passportPaymentAmount: {
        type: Number,
        default: 0
    },
    passportPaidAmount: {
        type: Number,
        default: 0
    },
    passportDueAmount: {
        type: Number,
        default: 0
    },
    tutorPaymentAmount: {
        type: Number,
        default: 0
    },
    tutorPaidAmount: {
        type: Number,
        default: 0
    },
    tutorDueAmount: {
        type: Number,
        default: 0
    },
}, { timestamps: true });

const ClientModel = mongoose.model("Client", ClientSchema);
module.exports = ClientModel;
