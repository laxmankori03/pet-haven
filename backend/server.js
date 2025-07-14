import 'dotenv/config'
import express from 'express';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import petRoutes from './routes/petRoutes.js';
import bookRoutes from './routes/bookingRoutes.js'
import { errorHandler } from './middlewares/errorHandler.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { userVerification } from './middlewares/authMiddleware.js';
import Pet from './models/Pet.js';
const app = express();


// Middleware 
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173", // ✅ your frontend
  credentials: true                // ✅ required to allow cookies
}));


// Route Setup 
// app.post("/", userVerification,(req, res) => {
//   console.log("Cookies:", req.cookies);
//   res.send("Server is up");
// });
app.use("/api/auth", authRoutes);
app.use("/api/pets", petRoutes);
app.use("/api/booking", bookRoutes);



// app.get("/deletAllPetData",async (req,res) => {
//    try {
//      const pets =await Pet.deleteMany({});
//        res.send("deleted",pets);
//    } catch (error) {
//     console.log(error);
    
//    } 
// })

app.use(errorHandler);
app.listen(process.env.PORT,()=>{
    connectDB(); 
    console.log(`🚀 Server running on port ${process.env.PORT}`);
})