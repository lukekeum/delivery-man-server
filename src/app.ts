import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import schema from './graphql/schema';

const app = express();
const server = new ApolloServer({
  schema,
  context: async ({ req, res }) => ({ req, res }),
});

app.use('*', cors());

server.applyMiddleware({ app, path: '/graphql' });

export default app;
