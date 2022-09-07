import Router from 'express';
import loginController from '../controllers/loginController';
import auth from '../middlewares/auth';
import jwt from '../middlewares/jwt';

const router = Router();

router.post('/login', auth.validateUser, jwt.generateToken, loginController);

export default router; 