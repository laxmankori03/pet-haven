import mongoose from 'mongoose';



const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
     verified: { type: Boolean, default: false },
  otp: { type: String },
  otpExpires: { type: Date },
   
},{timestamps: true})

const User = mongoose.model('User', userSchema);
export default User;