import Router from 'express';
import artistsController from '../controllers/artistsController';
import auth from '../middlewares/auth';
import jwt from '../middlewares/jwt';
import state from '../middlewares/state';
import { encryptPassword } from "../middlewares/auth";

const router = Router();

router.get('/artistas', jwt.validateToken, artistsController.getAllArtists);
router.post("/artistas", encryptPassword, artistsController.saveArtist);

export default router; 