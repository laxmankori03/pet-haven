import User from "../models/User.model.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import otpGenerator from "otp-generator";
import nodemailer from "nodemailer";


export const register = async (req, res) => {
    try {
        const { name, email, phone, password ,role} = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({success:false, message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const otp = otpGenerator.generate(6,{upperCaseAlphabets:false,specialChars:false});
        const otpExpires = Date.now() + 5 * 60 * 1000;

        const newUser = new User({
            name,
            email,
            phone,
            password:hashedPassword,
            role,
            otp,
            otpExpires
        });
        await newUser.save();

        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{user:process.env.EMAIL,pass:process.env.EMAIL_PASS},
        });
        await transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject:"Verify your Pet Haven account",
            text:`Your OTP is ${otp}. It expires in 5 minutes.`,
        })
        res.status(201).json({ success: true, message: "OTP sent to your gmail! Please verify to complete signup." });
    } catch (error) {
        res.status(500).json({message:"Error registering user", error: error.message});
    }
};

export const verifySignupOtp = async (req,res) => {
    try {
        const {email,otp} = req.body;
        
        const user = await User.findOne({email});
        if(!user) return res.status(404).json({success:false,message:"User Not found!"});
        if(user.verified) return res.status(400).json({message:"User already verified",success:true});

        if (user.otp !== otp) return res.status(400).json({ success: false, message: "Invalid OTP" });
        if (user.otpExpires < Date.now()) return res.status(400).json({ success: false, message: "OTP expired" });

        user.verified = true;
        user.otp = undefined;
        user.otpExpires = undefined;
        await user.save();
        res.status(201).json({ success: true, message: "Signup completed successfully!" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

export const login = async (req,res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(401).json({message:"Invalid credentials"});
        }
        
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
        
        res.cookie("token",token,{
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            maxAge: 24 * 60 * 60 * 1000 // 1 day   
        })
        res.status(200).json({message:"Login successful", user,token});
    } catch (error) {
        res.status(500).json({message:"Error logging in", error: error.message});
    }
}

export const getMe = async (req,res) => {
    res.status(200).json(req.user);
}


export const editUser = async (req,res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate({_id:req.user._id},{...req.body});
        res.status(201).json({message:"Profile Updated Succefull...",updatedUser});
    } catch (error) {
        res.status(500).json({message:"Error Update Profile",error:error.message});
    }
}