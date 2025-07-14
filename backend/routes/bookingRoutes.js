import express from 'express';
import { userVerification } from '../middlewares/authMiddleware.js';
import { getMyBookings, createBooking } from '../controllers/bookingController.js';

const router = express.Router();

router.post("/",userVerification, createBooking);
router.get('/my',userVerification, getMyBookings);

export default router;