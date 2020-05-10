// @ts-nocheck
import { makeExecutableSchema } from 'graphql-tools';
import { typeDefStoppingPoint } from '../queries/stopping-point.queries';
import { stoppingPointResolver } from '../resolvers/stopping-point.resolver';

const Query = `
  type Query {
    trips: [Trip]
  }
`;

const resolvers = {
    Query: stoppingPointResolver,
};

export const stoppingPointSchema = makeExecutableSchema({
    typeDefs: [Query, typeDefStoppingPoint],
    resolvers,
});
