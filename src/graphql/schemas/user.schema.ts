// @ts-nocheck
import { makeExecutableSchema } from 'graphql-tools';
import { typeDef as UserTypeDef } from '../queries/user.queries';
import { typeDefStoppingPoint, typeDefTrip } from '../queries/trip.queries';
import { userResolver } from '../resolvers/user.resolver';
import { signup, login } from '../../authentification/service/auth';

const Query = `
  type Query {
    user: User,
    Date: Date,
    userTrips(id: ID!): [Trip]
  }
`;

const Mutation = `
  type Mutation {
    signup(name: String, surname: String, residence: String, email: String, password: String): User,
    login(email: String, password: String): User,
    logout: User
    }
`;

const resolvers = {
    Query: userResolver,
    Mutation: {
        signup: (
            parent,
            { name, surname, residence, email, password },
            req
        ) => {
            return signup({ name, surname, residence, email, password, req });
        },
        //@ts-ignore
        login: (parent, { email, password }, req) => {
            return login({ email, password, req });
        },
        //@ts-ignore
        logout: (parent, args, req) => {
            const { user } = req.req;
            req.logout();

            return user;
        },
    },
};

export const userSchema = makeExecutableSchema({
    typeDefs: [Mutation, Query, UserTypeDef, typeDefStoppingPoint, typeDefTrip],
    resolvers,
});
