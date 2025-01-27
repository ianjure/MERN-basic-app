import bcrypt from "bcrypt"; // import bcrypt to hash the passwords

import User from "../models/user.model.js"; // import the User model

// Route: POST /api/user/register - Register User
export const registerUser = async (req, res) => {
    const user = req.body; // req.body is the data that is sent with the POST request by the user

    if(!user.username || !user.password) { // check if any of the fields are missing
        return res.status(400).json({ success: false, message: "Please provide all fields." });
    }

    const existingUser = await User.findOne({ username: user.username }); // Check if the username already exists in the database

    if (existingUser) {
        res.status(400).json({ success: false, message: "User already exists. Please choose a different username." });
    } else {
        const saltRounds = 10; // number of salt rounds for bcrypt
        const hashedPassword = await bcrypt.hash(user.password, saltRounds); // hash the password using bcrypt

        user.password = hashedPassword; // replace the original password with the hashed one
        const newUser = new User(user); // create a new user

        try {
            await newUser.save(); // save the user to the database
            res.status(201).json({ success: true, data: newUser });
        } catch (error) {
            console.error("Error in creating user: ", error.message);
            res.status(500).json({ success: false, message: "Internal server error." });
        }
    }
};

// Route: POST /api/user/login - Login User
export const loginUser = async (req, res) => {
    const user = req.body; // req.body is the data that is sent with the POST request by the user

    if(!user.username || !user.password) { // check if any of the fields are missing
        return res.status(400).json({ success: false, message: "Please provide all fields." });
    }

    try {
        const existingUser = await User.findOne({ username: user.username }); // check if the username exists in the database

        if (!existingUser) {
            res.status(400).json({ success: false, message: "Username does not exists." });
        } else {
            const isPasswordMatch = await bcrypt.compare(user.password, existingUser.password); // compare the hashed password from the database with the plaintext password
            
            if (!isPasswordMatch) {
                res.status(400).json({ success: false, message: "You entered the wrong password." });
            } else {
                res.status(200).json({ success: true, data: existingUser });
            }
        }
    }
    catch (error) {
        console.error("Error: ", error.message);
        res.status(500).json({ success: false, message: "Internal server error." });
    }
};