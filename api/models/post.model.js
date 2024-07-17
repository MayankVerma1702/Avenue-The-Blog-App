import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        userId:{
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true,
            unique: true,
        },
        image: {
            type: String,
            default: 'https://pplx-res.cloudinary.com/image/upload/v1721221308/ai_generated_images/o1xnv0ngmtzujplgkpmo.png'
        },
        category: {
            type: String,
            default: 'uncategorized'
        },
        slug: {
            type: String, 
            required: true,
            unique: true,
        }
    }, {
        timestamps: true
    }
)


const Post = mongoose.model('Post', postSchema)

export default Post