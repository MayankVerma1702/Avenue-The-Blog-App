import express from "express"
import mongoose from "mongoose"
import 'dotenv/config'
import authRoutes from "./routes/auth.routes.js"

const app = express()
app.use(express.json())

mongoose.connect(process.env.MONGO).then(() => {
    console.log("Database connected")
}).catch((err) =>{console.log(err)})

app.listen(3000, () => {
    console.log("Server is running on port 3000!!")
})

app.use('/api/auth', authRoutes)

app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500;

    const message = err.message || 'Internal Error!'

    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})