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

const allowedOrigins = [
  "http://localhost:3000", // development
  "https://pet-haven-nine-swart.vercel.app" // production
];


app.use(cors({
    origin: allowedOrigins, // Your frontend URL
    credentials: true               // Important for cookies
}));

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     credentials: true, // agar cookies / auth headers bhejne hain
//   })
// );

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
