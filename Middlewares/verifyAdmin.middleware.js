const UserModel = require("../Models/user.model");
const { verifyToken } = require("./verifyToken.middleware");

exports.verifyAdmin = function (req, res, next) {
    verifyToken(req, res, function () {
        isAdmin(req, res, next);
    });
}

async function isAdmin(req, res, next) {
    const { email } = req.user;
    const user = await UserModel.findOne({ email });

    if (email && user.role === 'admin') {
        next();
    } else {
        return res.status(403).json({ message: "Forbidden" });
    }
}