import express from 'express';
import { protect } from '../middlewares/auth.js';
import { addHotelToProfile, getHotels, isHotelExist } from '../controllers/addHotelToProfile.js';

const router = express.Router();

router.post("/add-hotel",protect,addHotelToProfile);
router.get('/hotel_exist',protect,isHotelExist);
router.get('/',getHotels);

export default router;