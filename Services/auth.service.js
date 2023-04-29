const UserModel = require('../Models/user.model.js');
const jwt = require('jsonwebtoken');

exports.signUpUser = async function (user_data) {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            role
        } = user_data;

        const newUser = new UserModel({
            firstName,
            lastName,
            email,
            password,
            role
        });

        if (firstName === null || firstName === "") {
            throw new Error("First name is required");
        } else if (lastName === null || lastName === "") {
            throw new Error("Last name is required");
        } else if (email === null || email === "") {
            throw new Error("Email is required");
        } else if (password === null || password === "") {
            throw new Error("Password is required");
        }

        const user = await UserModel.findOne({ email });

        if (user) {
            throw new Error("Email Address is already registered");
        }

        const accessToken = jwt.sign({ email }, process.env.ACCESS_TOKEN, { expiresIn: '1d' });
        const result = await newUser.save();
        return { accessToken, result };

    } catch (error) {
        throw new Error(error);
    }
}

exports.loginUser = async function (user_data) {
    try {
        const {
            email,
            password,
            role
        } = user_data;
        const user = await UserModel.findOne({ email });

        if (!user) {
            throw new Error("User not found");
        }

        // const isMatch = await bcrypt.compare(password, user.password);
        const isMatch = password === user.password;

        if (!isMatch) {
            throw new Error("Invalid password");
        }

        if (role !== user.role) {
            throw new Error("You are not authorized to login as " + role);
        }

        const accessToken = jwt.sign({ email }, process.env.ACCESS_TOKEN, { expiresIn: '1d' });
        return { accessToken, result: user };

    } catch (error) {
        throw new Error(error);
    }
}