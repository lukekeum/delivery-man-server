import express from 'express';
import bodyParser from 'body-parser';
import router from './routes';
import cookieParser from 'cookie-parser';

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

app.use(router);

export default app;
