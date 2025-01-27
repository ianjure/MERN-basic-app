import express from "express"; // import express to use its Router class

import { getProducts, createProduct, updateProduct, deleteProduct } from "../controllers/product.controller.js"; // import the controllers

const router = express.Router(); // create a new router

// PRODUCTS: define the routes and the controllers to handle the requests
router.get("/home", getProducts); // use the getProducts controller
router.post("/create", createProduct); // use the createProduct controller
router.put("/:id", updateProduct); // use the updateProduct controller
router.delete("/:id", deleteProduct); // use the deleteProduct controller

export default router; // export using default so we can import it with any name in other files