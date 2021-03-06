import { Router } from 'express';
import * as AuthController from '../controller/userAuth';

const router = Router();

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);

router.get('/me', AuthController.me);

export default router;
