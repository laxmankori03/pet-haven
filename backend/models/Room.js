import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    number: { type: String, required: true, unique: true },
    type: {
      type: String,
      enum: ["Standard", "Deluxe", "Premium"],
      required: true,
    },
    price: { type: Number, required: true },
    isAvailable: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model("Room", roomSchema);
