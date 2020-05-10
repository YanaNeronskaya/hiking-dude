import { makeExecutableSchema } from 'graphql-tools';
import { typeDefLocation } from '../queries/location.queries';
import { locationResolver } from '../resolvers/location.resolver';

const Query = `
  type Query {
    location(id: String!, str: String!): Location,
  }
`;

const resolvers = {
    Query: locationResolver,
};

export const locationSchema = makeExecutableSchema({
    typeDefs: [Query, typeDefLocation],
    //@ts-ignore
    resolvers,
});
