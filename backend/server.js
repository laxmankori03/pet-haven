import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// import bookingRoutes from './routes/bookingRoutes.js';
import authRoutes from './routes/authRoutes.js';
import petRoutes from './routes/petRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import hotelRoutes from './routes/hotelRoutes.js';
import { protect } from './middlewares/auth.js';

dotenv.config();

const app = express();



app.use(cors({
    origin: 'http://localhost:3000', // Your frontend URL
    credentials: true               // Important for cookies
}));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/pets', petRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/profile', hotelRoutes);
app.use('/api/hotels', hotelRoutes);

app.get('/', protect,(req, res) => {
    res.send('Welcome to Pet Haven API');
})


// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`✅ Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.error("❌ MongoDB Error:", err));
