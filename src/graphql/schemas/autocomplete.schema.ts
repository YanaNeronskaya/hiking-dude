import { makeExecutableSchema } from 'graphql-tools';
import { typeDefAutoComplete } from '../queries/autocomplete.queries';
import { autocompleteResolver } from '../resolvers/autocomplete.resolver';

const Query = `
  type Query {
    autocompleteResults(str: String): [AutoComplete],
  }
`;

const resolvers = {
    Query: autocompleteResolver,
};

export const autocompleteSchema = makeExecutableSchema({
    typeDefs: [Query, typeDefAutoComplete],
    //@ts-ignore
    resolvers,
});
