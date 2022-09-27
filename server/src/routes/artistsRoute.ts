import Router from 'express';
import artistsController from '../controllers/artistsController';
import jwt from '../middlewares/jwt';
import admin from '../middlewares/admin';

const router = Router();

router.get('/artistes', jwt.validateToken, artistsController.getAllArtists);
router.get('/artistes/:id', jwt.validateToken, artistsController.getOneArtist);
router.post("/artistes", jwt.validateToken, admin.checkRol, artistsController.saveArtist);
router.put('/artistes/:id', jwt.validateToken, admin.checkRol, artistsController.modifyArtist)
router.delete('/artistes/:id', jwt.validateToken, admin.checkRol, artistsController.deleteArtist)


export default router; 