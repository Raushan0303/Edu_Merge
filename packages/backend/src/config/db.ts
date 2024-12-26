import mongoose from "mongoose";

export const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string)
        console.log('MongoDB connected successfully');
    } catch (error:any) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1); 
    }
}