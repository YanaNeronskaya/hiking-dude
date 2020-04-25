//@ts-nocheck
import { getUserDb } from '../../server/controllers/user.db';
import { GraphQLDateTime } from 'graphql-iso-date';

const customScalarResolver = {
    Date: GraphQLDateTime,
};


export const userResolver = {
    ...customScalarResolver,
    user: (parentValue, args, req) => {
        return req.req.user;
    },
    userTrips: ({ id }) => {
        const user = getUserDb(id);

        return user.trips;
    },
};
