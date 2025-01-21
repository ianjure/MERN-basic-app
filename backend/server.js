import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

app.get("/products", (req, res) => {});

app.listen(5000, () => {
    connectDB();
    console.log("Server is running on http://localhost:5000");
});

// TO RUN: npm run dev