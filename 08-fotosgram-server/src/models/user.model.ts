import { Schema, model, Document } from "mongoose";


const userSchema = new Schema ({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    avatar: {
        type: String,
        default: 'av-1.png'
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is Required']
    },
    password: {
        type: String,
        required: [true, 'Password is Required']
    }
});

interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    avatar: string;
}

export const User = model<IUser>('User', userSchema);