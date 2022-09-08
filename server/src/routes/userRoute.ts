import Router from 'express';
import userController from '../controllers/userController';
import admin from '../middlewares/admin';
import  {encryptPassword}  from '../middlewares/auth';
import jwt from '../middlewares/jwt';

const router = Router();

//router.get('/admin/user', jwt.validateToken, admin.checkRol, userController.getAllUsers)
router.post('/user', encryptPassword, userController.saveUser);
//router.get('/admin/user/:user_id',  userController.getOneUser);
//router.put('/admin/user/:user_id', jwt.validateToken, admin.checkRol, userController.modifUser)
//router.delete('/admin/user/:user_id', jwt.validateToken, admin.checkRol, userController.deleteUser)

export default router