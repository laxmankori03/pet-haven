import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    pet:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pet',
        required: true,
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    hotel:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hotel',
        required: true,
    },
    checkInDate:{
        type: Date,
        required: true,
    },
    checkOutDate:{
        type: Date,
        required: true,
    },
    services:{
        type: [String],
        required: true
    },
    status:{
        type: String,
        enum: ['Pending', 'Confirmed', 'Completed', 'Cancelled'],
        default: 'Pending'
    },
},{timestamps: true});

export default mongoose.model('Booking', bookingSchema);