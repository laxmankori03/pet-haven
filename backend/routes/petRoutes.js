import express from 'express';
import { protect } from '../middlewares/auth.js';
import { createPet, deletePet, getMyPet } from '../controllers/petController.js';

const router = express.Router();

router.post('/', protect,createPet);
router.get('/', protect,getMyPet);
router.delete("/:id",protect,deletePet);

export default router;