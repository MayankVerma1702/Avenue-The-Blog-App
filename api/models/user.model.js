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
    },
    profilePicture: {
        type: String,
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fvectors%2Fuser-profile.html&psig=AOvVaw3x7kqTW-uIsUyHn90JOvqY&ust=1720284153851000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCND2rIKskIcDFQAAAAAdAAAAABAE",
    } 
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User;