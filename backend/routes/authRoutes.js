import { register, login, getMe, editUser, verifySignupOtp } from '../controllers/authController.js';
import express from 'express';
import { protect } from '../middlewares/auth.js';

const router = express.Router();

router.post('/register',register);
router.post('/verify-signup-otp',verifySignupOtp);
router.post('/login',login);
router.get('/me',protect,getMe);
router.patch('/me/update',protect,editUser);

export default router;