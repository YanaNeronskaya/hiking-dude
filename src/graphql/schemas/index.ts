import { mergeSchemas } from 'graphql-tools';
import { userSchema } from './user.schema';
import { autocompleteSchema } from './autocomplete.schema';
import { locationSchema } from './location.schema';

export const rootSchema = mergeSchemas({
    subschemas: [
        { schema: userSchema },
        { schema: autocompleteSchema },
        { schema: locationSchema },
    ],
});
