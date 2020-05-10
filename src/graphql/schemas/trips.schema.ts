// @ts-nocheck
import { makeExecutableSchema } from 'graphql-tools';
import { typeDefTrip, typeDefStoppingPoint } from '../queries/trip.queries';
import { tripResolver } from '../resolvers/trip.resolver';

const Query = `
  type Query {
    trips: [Trip]
  }
`;

const resolvers = {
    Query: tripResolver,
};

export const tripSchema = makeExecutableSchema({
    typeDefs: [Query, typeDefTrip, typeDefStoppingPoint],
    resolvers,
});
