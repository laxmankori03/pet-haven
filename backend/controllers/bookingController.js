import Booking from "../models/Booking.js";

export const createBooking = async (req,res,next) => {
    try {
        const booking = await Booking.create({...req.body, user: req.user.id});
        res.status(201).json({success:true, message:"Room Booked Succefully...",booking});
    } catch (error) {
        next(error)
    }
};

export const getMyBookings = async (req,res,next) => {
    try {
        const bookings = await Booking.find({user:req.user.id}).populate("pet room");
        res.status(200).json(bookings);
    } catch (error) {
        next(error)
    }
};

