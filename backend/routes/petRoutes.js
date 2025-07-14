import express from 'express';
import { createPet, getUserPets } from '../controllers/petController.js';
import { userVerification } from '../middlewares/authMiddleware.js';
const router = express.Router();

router.post("/",userVerification, createPet);
router.get('/',userVerification, getUserPets);

export default router;