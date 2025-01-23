import express from "express"; // import express to use its functionality
import dotenv from "dotenv"; // import the dotenv package to use environment variables

import { connectDB } from "./config/db.js"; // import the named connectDB function from the db.js file
import productRoutes from "./routes/product.route.js"; // import the product routes from the product.route.js file

dotenv.config(); // allows us to use environment variables in the .env file

const app = express(); // create an instance of express

app.use(express.json()); // allows us to accept JSON data in the body of the request (req.body)

app.use("/api/products", productRoutes); // use the product routes with the /api/products prefix

app.listen(5000, () => { // start the server on port 5000
    connectDB(); // connect to the database
    console.log("Server is running on http://localhost:5000");
});

// TO RUN: npm run dev