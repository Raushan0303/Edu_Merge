import mongoose, { Document, Schema } from "mongoose";

// Define the interface for the User document
export interface IUser extends Document {
    googleId?: string;
    name: string;
    email: string;
    password: string;
    role?: 'User' | 'Instructor';
    isVerified?: boolean;
    otp?: string;
    otpExpires?: Date;
    courses?: mongoose.Types.ObjectId[];
    createdAt?: Date;
    updatedAt?: Date;
}

// Create the User schema
const userSchema = new Schema<IUser>({
    googleId: {
        type: String,
        unique: true,
        sparse: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['User', 'Instructor'],
        default: 'User',
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    otp: {
        type: String,
        required: false,
    },
    otpExpires: {
        type: Date,
    },
    courses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course',
        },
    ],
    
}, { timestamps: true });

// Create the indexes
userSchema.index({ email: 1 });


// Create and export the User model
const User = mongoose.model<IUser>('User', userSchema);
export default User;