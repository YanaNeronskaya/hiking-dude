import { User } from '../../constants/interface';
import { customScalarResolver } from './common.resolver';

export const userResolver = {
    ...customScalarResolver,
    user: (parentValue: any, args: any, req: { req: { user: User } }) => {
        return req.req.user;
    },
};
