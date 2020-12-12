import { Request, Response, NextFunction } from 'express';

type TRouter<T = any> = (req: Request, res: Response, next?: NextFunction) => T;

export default TRouter;
