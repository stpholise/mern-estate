import User from "../models/user.model.js";
import bcrypt from 'bcrypt'
import { validateEmail } from "../utils/vaildateEmail.js";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
    const { username, password, email } = req.body

 
    if (!email) {
      return next(errorHandler(400, "Email is required"));
    }

    if (!validateEmail(email)) {
      return next(errorHandler(400, "Invalid email"));
    }
    const existingUser = await User.findOne({email})
    if (existingUser) {
        return next(errorHandler(400, "Email already exists "));
    }

    const salt = await bcrypt.genSalt(10)
    const hasedPassword = await bcrypt.hash(password, salt)

    try{
            const newUser = new User({username, email, password: hasedPassword});
            await newUser.save()
            res.status(201).json("User created successfuly")

            res.json({
                email, username, password
            })
    } catch(error) {
       next(error)
    }
}