import { Router } from 'express';
import UserRouter from './userAuth';

const router = Router();

router.use(UserRouter);

export default router;
