const UserModel = require("../Models/UserModel");
const bcrypt = require('bcrypt');

const Signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                message: "User already exists. Please sign in.",
            });
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = new UserModel({ name, email, password: hashedPassword });
        await newUser.save();

        return res.status(201).json({
            message: "Signup successful",
            success: true,
        });

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error. Failed to signup.",
            error: error.message,
        });
    }
};

const Signin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await UserModel.findOne({ email });
        if (!existingUser) {
            return res.status(404).json({
                message: "User doesn't exist. Please sign up.",
            });
        }

        const isPasswordValid = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordValid) {
            return res.status(401).json({
                message: "Email or password is incorrect.",
            });
        }

        return res.status(200).json({
            message: "Signin successful",
            success: true,
        });

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error. Failed to signin.",
            error: error.message,
        });
    }
};


module.exports = { Signup, Signin };