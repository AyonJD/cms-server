const UserModel = require('../Models/user.model.js');
const jwt = require('jsonwebtoken');

exports.loggedInUser = async function (token) {
    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);
        const user = await UserModel.findOne({ email: decoded.email });
        return user;
    } catch (error) {
        throw new Error(error);
    }
}