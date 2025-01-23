import mongoose from "mongoose"; // import mongoose to interact with the database

import Product from "./models/product.model.js"; // import the Product model

// Route: GET /api/products - Get all Products
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({}); // find all products in the database - if you pass {} it will return all products
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        console.error("Error in getting products: ", error.message);
        res.status(500).json({ success: false, message: "Internal server error." });
    }
};

// Route: POST /api/products - Create a Product
export const createProduct = async (req, res) => {
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
};

// Route: PUT /api/products/:id - Update a Product
export const updateProduct = async (req, res) => { // :id is a URL parameter (dynamic and can be any value)
    const {id} = req.params; // get the id from the URL - {what you passed in the URL}
    const product = req.body; // get the updated data from the body of the request

    if(!mongoose.Types.ObjectId.isValid(id)) { // check if the id is not from a valid Product in the database
        return res.status(404).json({ success: false, message: "Product not found." });
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true }); // find the product by id and update it with the new data
        res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error." });
    }
};

// Route: DELETE /api/products/:id - Delete a Product
export const deleteProduct = async (req, res) => { // :id is a URL parameter (dynamic and can be any value)
    const {id} = req.params; // get the id from the URL - {what you passed in the URL}

    try {
        await Product.findByIdAndDelete(id); // find the product by id through the Product model then delete it
        res.status(200).json({ success: true, message: "Product deleted successfully." });
    } catch (error) {
        res.status(404).json({ success: false, message: "Product not found." });
    }
};