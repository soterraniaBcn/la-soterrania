import Router from 'express'
import placeController from '../controllers/placeController'
import jwt from '../middlewares/jwt'
import admin from '../middlewares/admin'

const router = Router()

router.get('/espais', jwt.validateToken, placeController.getAllPlaces)
router.get('/espais/:id', jwt.validateToken, placeController.getOnePlace)
router.post(
  '/espais',
  jwt.validateToken,
  admin.checkRol,
  placeController.savePlace,
)
router.put(
  '/espais/:id',
  jwt.validateToken,
  admin.checkRol,
  placeController.modifySpace,
)
router.delete(
  '/espais/:id',
  jwt.validateToken,
  admin.checkRol,
  placeController.deleteSpace,
)

export default router
