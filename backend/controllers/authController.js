import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createSecretToken } from "../utils/SecretToken.js";

// Signup 

export const signup = async (req,res) => {
    try {
      const {name, email, password, role} = req.body;
      
      const existingUser = await User.findOne({email});
      if (existingUser) return res.status(400).json({message:"User already exists"});

      const hashPassword = await bcrypt.hash(password,10);
      const allowedRoles = ["user", "admin"];
      const finalRole = allowedRoles.includes(role) ? role : "user";
      const user = await User.create({name, email, password:hashPassword, role:finalRole});

    //   const token = jwt.sign({id:user._id, role: user.role}, process.env.JWT_SECRET, {expiresIn:"7d"});
    const token = createSecretToken(user._id);

      res.cookie("token",token,{
         withCredentials: true,
      httpOnly: false,
      });

      res.status(201).json({token,user,success: true, message: "Signup successful",});
      next();
    } catch (error) {
       console.error("❌ Signup Error:", error);  // <-- Add this
  res.status(500).json({ message: "Signup failed", error: error.message });
    }
};

// Login 

export const login = async (req,res) => {
    try {
       const {email, password} = req.body;
    if(!email || !password ){
      return res.json({message:'All fields are required'})
    }

       const user = await User.findOne({email});
       if (!user) return res.status(400).json({message:"Invalid credentials"});
        
       const isMatch = await bcrypt.compare(password, user.password);
       if (!isMatch) return res.status(400).json({message:"Invalid credentials"});
        
    //    const token = jwt.sign({id:user._id, role: user.role}, process.env.JWT_SECRET, {expiresIn:"7d"});
    const token = createSecretToken(user._id);

    res.cookie("token",token,{
         withCredentials: true,
       httpOnly: false,
    });

  res.status(200).json({
  success: true,
  message: "Login successful",
  user,
});
    } catch (error) {
        res.status(500).json({message:"Login failed", error});
    }
};

