import Router from 'express';
import artistsController from '../controllers/artistsController';
import auth from '../middlewares/auth';
import jwt from '../middlewares/jwt';
import state from '../middlewares/state';
import { encryptPassword } from "../middlewares/auth";
import admin from '../middlewares/admin';

const router = Router();

router.get('/artistas', jwt.validateToken, artistsController.getAllArtists);
router.get('/artistas/:id', jwt.validateToken, artistsController.getOneArtist);
router.post("/artistas", jwt.validateToken, admin.checkRol, artistsController.saveArtist);
router.delete('/artistas/:id', jwt.validateToken, admin.checkRol, artistsController.deleteArtist)

export default router; 