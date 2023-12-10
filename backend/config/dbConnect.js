import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config({ path: "backend/config/config.env" });

const connectDatabase = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_LOCAL_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);   
    }
};

export default connectDatabase;
