// backend/middlewares/authMiddleware.js
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import 'dotenv/config';

export const userVerification = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ status: false, message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ status: false, message: "User not found" });
    }

    // Attach user data to request object for use in routes/controllers
    req.user = user;
    // return res.status(200).json({ status: true, userName: user.name });
    next(); 
  } catch (err) {
    return res.status(403).json({ status: false, message: "Invalid token" });
  }
};
