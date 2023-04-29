const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        unique: true
    },
    lastName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLenght: 6,
    },
    role: {
        type: String,
        default: "client",
        enum: ["admin", "manager", "communication executive", "sales executive", "office eecutive", "accountant", "client"]
    },
}, { timestamps: true });

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;