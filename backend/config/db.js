import mongoose from "mongoose";

export const connectDB = async () => { // async function to connect to the database
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI); // connect to the MongoDB database using the URI from the .env file
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // 1 means failure, 0 means success
    }
}