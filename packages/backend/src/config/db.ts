import mongoose from "mongoose";

export const connect = async() => {
    try {
        await mongoose.connect("mongodb://localhost:27017/edu_merge")
        console.log('MongoDB connected successfully');
    } catch (error:any) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1); 
    }
}