import express from 'express';
import { protect } from '../middlewares/auth.js';
import { createBooking, getAdminBookings, getMyBookings, updateBookingStatus } from '../controllers/bookingController.js';

const router = express.Router();

router.post("/",protect,createBooking);
router.get("/mine",protect,getMyBookings);
router.get("/admin",protect,getAdminBookings);
router.patch("/:id/status",protect,updateBookingStatus);

export default router;