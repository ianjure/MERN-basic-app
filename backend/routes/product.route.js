import express from "express"; // import express to use its Router class

import { getProducts, createProduct, updateProduct, deleteProduct } from "../controllers/product.controller.js"; // import the controllers

const router = express.Router(); // create a new router

router.get("/", getProducts); // use the getProducts controller to handle the request

router.post("/", createProduct); // use the createProduct controller to handle the request

router.put("/:id", updateProduct); // use the updateProduct controller to handle the request

router.delete("/:id", deleteProduct); // use the deleteProduct controller to handle the request

export default router; // export the router so that it can be used in other files, using default we can import it with any name in other files