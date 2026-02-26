import Listing from "../models/listing.model.js";
import { errorHandler } from "../utils/error.js";

export const createListing = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    return res.status(201).json({
      message: "Listing created successfully",
      listing,
    });
  } catch (error) {
    next(errorHandler(500, error.message));
  }
};

export const dleletListing = async (req, res, next) => {
  const id = req.params.id;
  const listing = await Listing.findById(id);

if (!listing) {
  return next(errorHandler(404, "Listing not found"));
}

  try {
    if (req.user.userId !== listing.userRef) {
      console.log("user id", req.user.userId);
      console.log("user ref", listing.userRef);
      return next(errorHandler(401, "You can only delete your own listing!"));
    }
    if (!listing) {
      return next(errorHandler(404, "Listing not found"));
    }
    const response = await Listing.findByIdAndDelete(id);
    res.status(200).json("Listing has been deleted");
  } catch (error) {
    next(errorHandler(500, error.message));
  }
};
