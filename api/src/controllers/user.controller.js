import User from "../models/user.model.js";
import listings from "../models/listing.model.js"
import { generateToken } from "../utils/generateToken.js";
import { errorHandler } from "../utils/error.js";
import cloudinary from "../lib/cloundinary.js";
import { validateEmail } from "../utils/vaildateEmail.js";
import Listing from "../models/listing.model.js";

export const test = (req, res) => {
  res.json({
    message: "Hello World",
  });
};

export const update = async (req, res, next) => {
  const { email, username, avatar } = req.body;

  if (req.params.id !== req.user.userId) {
    return next(errorHandler(401, "You can only update your own account!"));
  }

  try {
    const userId = req.user.userId;

    if (!email) {
      return next(errorHandler(400, "Email is required"));
    }

    if (!validateEmail(email)) {
      return next(errorHandler(400, "Invalid email"));
    }

    const user = await User.findById(userId);

    if (!user) {
      return next(errorHandler(404, "User not found"));
    }

    let avatarUrl = user.avatar;

    if (avatar) {
      try {
        const uploadResponse = await cloudinary.uploader.upload(avatar);
        avatarUrl = uploadResponse.secure_url;
      } catch (error) {
        return next(errorHandler(500, "Image upload failed"));
      }
    }

    user.username = username || user.username;
    user.email = email || user.email;
    user.avatar = avatarUrl;

    const updatedUser = await user.save();

    generateToken(updatedUser._id, res);

    const { password, ...rest } = updatedUser._doc;

    res.status(200).json({
      message: "Update successful",
      user: rest,
    });
  } catch (error) {
    console.log(error);
    next(errorHandler(500, "Server error"));
  }
};

export const deleteUser = async (req, res, next) => {
    
  if (req.params.id !== req.user.userId) {
    return next(errorHandler(401, "You can only delete your own account!"));
  }
  try {
    const userId = req.user.userId;
    const user = await User.findByIdAndDelete(req.params.id);
    if(!user) {
        return res.status(400).json("User not found")
    }
    res.clearCookie("jwt");
    res.status(200).json("User had been deleted!");
  } catch (error) {
    next(errorHandler(500, error.message));
  }
};

export const getUserListings = async  (req, res, next) => {
  const id = req.params.id
  if(req.user.userId === id) {
    try {
      const listings = await Listing.find({userRef :  id})
      res.status(200).json(listings)
    }catch(error) {
      next(errorHandler(501, 'Internal server error'))
    }
  }
  else{ return next(errorHandler(401, "You can only view your own listing "))}
}