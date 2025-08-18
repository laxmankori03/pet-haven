import User from "../models/User.model.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';


export const register = async (req, res) => {
    try {
        const { name, email, phone, password ,role} = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name,
            email,
            phone,
            password:hashedPassword,
            role
        });
        await newUser.save();
        res.status(201).json({message:"User registered successfully"});
    } catch (error) {
        res.status(500).json({message:"Error registering user", error: error.message});
    }
};

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
            secure: false,
            sameSite: 'Lax',
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
