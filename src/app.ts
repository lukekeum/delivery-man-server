import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';

const app = express();
// TODO: Create Apollo-Server

app.use('*', cors());

export default app;
