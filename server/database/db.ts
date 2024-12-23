import mongoose from "mongoose";
import { MONGO_URL } from "../utils/config"

export const connectDB = async () => {
    if (!MONGO_URL) {
        console.log("Mongo URL not defined");
        process.exit(1);
    }

    try {
        await mongoose.connect(MONGO_URL);
        console.log("MongoDB connected successfully");
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
}