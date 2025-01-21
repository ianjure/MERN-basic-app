import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";

dotenv.config();

const app = express();

app.post("/api/products", async (req, res) => {
    const product = req.body; // req.body is the data that is sent with the POST request by the user

    if(!product.name || !product.price || !product.image) { // check if any of the fields are missing
        return res.status(400).json({ success: false, message: "Please provide all fields." });
    }

    const newProduct = new Product(product); // create a new product with the data sent by the user

    try {
        await newProduct.save(); // save the product to the database
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.error("Error in creating product: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

app.listen(5000, () => {
    connectDB();
    console.log("Server is running on http://localhost:5000");
});

// TO RUN: npm run dev