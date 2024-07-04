import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/error.js";

export const signup = async(req,res,next) => {
    const {username, email, password} = req.body;


    if(!username || !email | !password || username ==="" || email ==="" || password===""){
        return next(errorHandler(400, 'All fields are required!'))
    }

    const hashedPassword = bcryptjs.hashSync(password,10);

    const newUser = new User({
        username,
        email,
        password :hashedPassword,
    })

    try {
        await newUser.save();
        res.json("Signup successful")   
    } catch (err) {
        next(err);
    }
}

export const signin = async(req,res,next)=> {
     const{username, password} = req.body;

     if(!username || !password || username ==='' || password === ''){
        return next(errorHandler(400,'All fields are required!'))
     }

     try {
        const validUser = await User.findOne({username})
        if(!validUser){
            return next(errorHandler(400, 'User not found!'))
        }

        const validatePassword = await bcryptjs.compareSync(password, validUser.password)
        if(!validatePassword){
            return next(errorHandler(400, 'Invalid Password'))
        }

        const token = jwt.sign({
            id: validUser._id
        },process.env.JWT_SECRET)

        const{password:pass, ...rest} = validUser._doc;


        res.status(200).cookie('access token', token, {
            httpOnly: true}).json(rest)
     } catch (error) {
        next(error)
     }
}