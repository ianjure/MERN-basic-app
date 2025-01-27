import express from "express"; // import express to use its Router class

import { loginUser, registerUser } from "../controllers/user.controller.js"; // import the controllers

const router = express.Router(); // create a new router

// USERS: define the routes and the controllers to handle the requests
router.post("/login", loginUser); // use the loginUser controller
router.post("/register", registerUser); // use the registerUser controller

export default router; // export using default so we can import it with any name in other files