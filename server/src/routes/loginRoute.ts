import Router from 'express';
import loginController from '../controllers/loginController';
import auth from '../middlewares/auth';
import jwt from '../middlewares/jwt';
import state from '../middlewares/state';

const router = Router();

router.post('/login', auth.validateUser, jwt.generateToken, state.checkState, loginController);

export default router; 