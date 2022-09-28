import Router from 'express';
import placeController from '../controllers/placeController';
import jwt from '../middlewares/jwt';
import admin from '../middlewares/admin';

const router = Router();

router.get('/espais', jwt.validateToken, placeController.getAllPlaces);
router.get('/espais/:id', jwt.validateToken, placeController.getOnePlace);
router.post("/espais", jwt.validateToken, admin.checkRol, placeController.savePlace);
/*
router.put('/artistas/:id', jwt.validateToken, admin.checkRol, artistController.modifyArtist)
router.delete('/artistas/:id', jwt.validateToken, admin.checkRol, artistController.deleteArtist)
*/

export default router; 