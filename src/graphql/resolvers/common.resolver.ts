import { GraphQLDateTime } from 'graphql-iso-date';

export const customScalarResolver = {
    Date: GraphQLDateTime,
};