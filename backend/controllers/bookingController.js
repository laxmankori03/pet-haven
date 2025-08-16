import Booking from "../models/Booking.js";
import Profile from '../models/Profile.js'

export const createBooking = async (req,res) => {
    try {
        const booking = new Booking({
            ...req.body,
            owner: req.user._id,
        });
        await booking.save();
        res.status(201).json({booking,message: "Booking created successfully"});
    } catch (error) {
        return res.status(500).json({message:"Internal Server Error",error:error.message});
    }
}

export const getMyBookings = async (req,res) => {
    try {
        const bookings = await Booking.find({owner: req.user._id}).populate('pet').populate('hotel');
        res.status(200).json(bookings);
    } catch (error) {
        return res.status(500).json({message:"Internal Server Error",error:error.message});
    }
}

export const getAdminBookings = async (req,res) => {
    try {
        const hotelId = await Profile.findOne({userId:req.user._id});
        if (!hotelId) return res.status(404).json({message:"Profile Not found!"});
        const bookings = await Booking.find({hotel:hotelId.hotel}).populate("owner","name email").populate("pet");
        if (!bookings) return res.status(404).json({message:"Bookings not found!"});
        res.status(201).json(bookings);
    } catch (error) {
        return res.status(500).json({message:"Internal Server Error",error:error.message});
    }
}

export const updateBookingStatus = async (req,res) => {
    try {
        const bookingId = req.params.id;
        const {status} = req.body;
        const booking = await Booking.findByIdAndUpdate(bookingId,{status},{new:true});
        if(!booking) return res.status(404).json({message:"bookiong not found!"});
        res.status(201).json({ message: "Status updated", booking })
    } catch (error) {
        return res.status(500).json({message:"Internal Server Error",error:error.message});
    }
}