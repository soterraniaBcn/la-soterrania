import Router from 'express';
import placeController from '../controllers/placeController';
import jwt from '../middlewares/jwt';
import admin from '../middlewares/admin';

const router = Router();

router.get('/places', jwt.validateToken, placeController.getAllPlaces);
router.get('/places/:id', jwt.validateToken, placeController.getOnePlace);
/*
router.post("/artistas", jwt.validateToken, admin.checkRol, artistController.saveArtist);
router.put('/artistas/:id', jwt.validateToken, admin.checkRol, artistController.modifyArtist)
router.delete('/artistas/:id', jwt.validateToken, admin.checkRol, artistController.deleteArtist)
*/

export default router; 