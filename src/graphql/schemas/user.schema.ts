// @ts-nocheck
import { makeExecutableSchema } from 'graphql-tools';
import { typeDef as UserTypeDef } from '../queries/user.queries';
import { typeDefStoppingPoint, typeDefTrip } from '../queries/trip.queries';

const Query = `
  type Query {
    user(id: ID!): User
  }
`;

export const userSchema = makeExecutableSchema({
    typeDefs: [Query, UserTypeDef, typeDefStoppingPoint, typeDefTrip],
});
