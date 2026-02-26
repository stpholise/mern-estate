import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { validateEmail } from "../utils/vaildateEmail.js";
import { errorHandler } from "../utils/error.js";
import { generateToken } from "../utils/generateToken.js";

export const signup = async (req, res, next) => {
  const { username, password, email } = req.body;

  if (!email) {
    return next(errorHandler(400, "Email is required"));
  }

  if (!validateEmail(email)) {
    return next(errorHandler(400, "Invalid email"));
  }
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return next(errorHandler(400, "Email already exists "));
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const newUser = new User({ username, email, password: hashedPassword });

    await newUser.save();

    generateToken(newUser._id, res);

    res.status(201).json({
      message: "User created successfully",

      email,
      username,
    });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email) {
    return next(errorHandler(400, "Email is required"));
  }

  if (!validateEmail(email)) {
    return next(errorHandler(400, "Invalid email"));
  }

  try {
    const validUser = await User.findOne({ email });

    if (!validUser) next(errorHandler(404, "Invalid credential"));

    const validPassword = await bcrypt.compare(password, validUser.password);

    if (!validPassword) return next(errorHandler(401, "Invalid credentials!"));

    generateToken(validUser._id, res);
    const { password: pass, ...rest } = validUser._doc;

    res.status(200).json({
      message: "Signin successful ",
      ...rest,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const google = async (req, res, next) => {
  const { email, name, photo } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user) {
      generateToken(user._id, res);
      const { password: pass, ...rest } = user._doc;
      res.status(200).json({
        message: "Signin successful ",
        ...rest,
      });
    } else {
      const generatePassword = Math.random().toString(36).slice(-8);

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(generatePassword, salt);

      const newUser = new User({
        username:
          name.replace(/\s+/g, "").toLowerCase() +
          Math.random().toString(36).slice(-4),
        email: email,
        password: hashedPassword,
        avatar: photo,
      });

      await newUser.save();

      generateToken(newUser._id, res);
      const { password: pass, ...rest } = newUser._doc;
      res.status(201).json({
        message: "User created successfuly",
        ...rest,
      });
    }
  } catch (error) {
    next(error);
  }
};


export const signout = async (req, res, next) => {
  try{
    res.clearCookie('jwt');
    res.status(200).json('User has been logged out')
  } catch (error) {
    next(error)
  }
}