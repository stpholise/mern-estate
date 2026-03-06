import express from 'express'
import { createListing, dleletListing, updateListing, getListing, getAllListings } from '../controllers/listing.controller.js'
import { verifyToken } from '../utils/verifyUser.js'

const router = express.Router()

router.post('/create',verifyToken, createListing)
router.delete("/delete/:id", verifyToken, dleletListing)
router.post("/update/:id", verifyToken, updateListing);
router.get('/all', getAllListings)
router.get("/get/:id", getListing);

export default router