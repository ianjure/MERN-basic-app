import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";

dotenv.config(); // allows us to use environment variables in the .env file

const app = express(); // create an instance of express

app.use(express.json()); // allows us to accept JSON data in the body of the request (req.body)

// Route: GET /api/products - Get all Products
app.get("/api/products", async (req, res) => {
    try {
        const products = await Product.find({}); // find all products in the database - if you pass {} it will return all products
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        console.error("Error in getting products: ", error.message);
        res.status(500).json({ success: false, message: "Internal server error." });
    }
});

// Route: POST /api/products - Create a Product
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
        res.status(500).json({ success: false, message: "Internal server error." });
    }
});

// Route: DELETE /api/products - Delete a Product
app.delete("/api/products/:id", async (req, res) => { // :id is a URL parameter (dynamic and can be any value)
    const {id} = req.params; // get the id from the URL - {what you passed in the URL}

    try {
        await Product.findByIdAndDelete(id); // find the product by id through the Product model then delete it
        res.status(200).json({ success: true, message: "Product deleted successfully." });
    } catch (error) {
        res.status(404).json({ success: false, message: "Product not found." });
    }
});

app.listen(5000, () => { // start the server on port 5000
    connectDB(); // connect to the database
    console.log("Server is running on http://localhost:5000");
});

// TO RUN: npm run dev