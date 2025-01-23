import express from "express"; // import express to use its functionality
import dotenv from "dotenv"; // import the dotenv package to use environment variables
import path from "path"; // import path for deployment

import { connectDB } from "./config/db.js"; // import the named connectDB function from the db.js file
import productRoutes from "./routes/product.route.js"; // import the product routes as productRoutes from the product.route.js file

dotenv.config(); // allows us to use environment variables in the .env file

const app = express(); // create an instance of express
const PORT = process.env.PORT || 5000; // set the port to the environment variable PORT or 5000
const __dirname = path.resolve(); // directory path needed for production

app.use(express.json()); // allows us to accept JSON data in the body of the request (req.body)
app.use("/api/products", productRoutes); // use the product routes with the /api/products prefix

if(process.env.NODE_ENV === "production") { // code snippet for production deployment
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    })
}

app.listen(PORT, () => { // start the server on port 5000
    connectDB(); // connect to the database
    console.log("Server is running on http://localhost:" + PORT);
});