import { Schema, model, Document } from "mongoose";
import bcrypt from 'bcrypt';


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

userSchema.method('isValidPassword', function(password: string): boolean {
    return bcrypt.compareSync(password, this.password);
});

interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    avatar: string;
    isValidPassword(password: string): boolean;
}

export const User = model<IUser>('User', userSchema);