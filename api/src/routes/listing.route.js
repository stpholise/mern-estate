import express from 'express'
import { createListing, dleletListing } from '../controllers/listing.controller.js'
import { verifyToken } from '../utils/verifyUser.js'

const router = express.Router()

router.post('/create',verifyToken, createListing)
// router.get('/all')
router.delete("/delete/:id", verifyToken, dleletListing)

export default router