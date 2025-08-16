import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true,
        unique:true
    },
     hotel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hotel",
      default:null
    }
},{timestamps: true});

export default mongoose.model('Profile', profileSchema);
