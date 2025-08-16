import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true ,default:"defaultHotel.jpg"},
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

const Hotel = mongoose.model("Hotel", hotelSchema);
export default Hotel;