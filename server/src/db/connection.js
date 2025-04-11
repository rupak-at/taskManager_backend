import mongoose from "mongoose";
import { config } from "dotenv";

config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`${process.env.MONGO_URI}/taskManager`);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("MongoDB Connection Failed: ",error);
        process.exit(1);        
    }
}

export default connectDB