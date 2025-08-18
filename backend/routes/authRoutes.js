import { register, login, getMe, editUser } from '../controllers/authController.js';
import express from 'express';
import { protect } from '../middlewares/auth.js';

const router = express.Router();

router.post('/register',register);
router.post('/login',login);
router.get('/me',protect,getMe);
router.patch('/me/update',protect,editUser);

export default router;