import User from "../models/user.model.js";
import bcrypt from 'bcrypt'
import { validateEmail } from "../utils/vaildateEmail.js";

export const signup = async (req, res) => {
    const { username, password, email } = req.body

    if(!validateEmail(email.trim())) {
        return res.status(400).json({message: "Inavalid Email Format."})
    }

    const existingUser = await User.findOne({email})
    if (existingUser) {
        return res.status(400).json("User already exists")
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
        res.status(500).json(error)
    }
}