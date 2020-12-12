import { gql, IResolvers, makeExecutableSchema } from 'apollo-server-express';

const typeDef = gql`
  scalar JSON
  scalar Date
  type Query {
    _version: String
  }
  type Mutation {
    _empty: String
  }
`;

const resolver: IResolvers = {
  Query: {
    _version: () => '0.1',
  },
  Mutation: {},
};

const schema = makeExecutableSchema({
  typeDefs: typeDef,
  resolvers: resolver,
});

export default schema;
