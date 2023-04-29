const UserServices = require('../Services/user.service.js');

module.exports = {
    loggedInUser: async (req, res) => {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const user = await UserServices.loggedInUser(token);
            res.json({ message: "User found", user });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
}