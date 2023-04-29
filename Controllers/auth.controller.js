const AuthServices = require('../Services/auth.service.js');

module.exports = {
    signUpUser: async (req, res) => {
        try {
            const user_data = req.body;
            const { accessToken, result } = await AuthServices.signUpUser(user_data);
            res.header('Authorization', `Bearer ${accessToken}`)
                .header('Access-Control-Expose-Headers', 'Authorization')
                .json({ message: "User registered successfully", result });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    loginUser: async (req, res) => {
        try {
            const user_data = req.body;
            const { accessToken, result } = await AuthServices.loginUser(user_data);
            res.header('Authorization', `Bearer ${accessToken}`)
                .header('Access-Control-Expose-Headers', 'Authorization')
                .json({ message: "Login successful", result });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}