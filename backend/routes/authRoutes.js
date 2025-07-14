import express from 'express';
import { login, signup} from '../controllers/authController.js';
import { userVerification } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post("/signup",signup);
router.post('/login',login);

router.post("/verify",userVerification, (req, res) => {
  return res.status(200).json({
    status: true,
    user: {
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      role:req.user.role
    }
  })});

export default router;