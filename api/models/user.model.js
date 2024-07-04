import { timeStamp } from "console";
import mongoose, { Schema } from "mongoose";
import { type } from "os";

const userSchema = Schema ({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email :{
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    } 
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User;