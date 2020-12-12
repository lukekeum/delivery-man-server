import { Router } from 'express';
import UserRouter from './userAuth';

const router = Router();

router.use('/auth', UserRouter);

export default router;
