// @ts-nocheck

import Koa from 'koa';
import Router from 'koa-router';
import graphqlHTTP from 'koa-graphql';
import serve from 'koa-static';
import session from 'koa-session';

import { template } from './template';
import { serverRender } from './server/server';
import { USER_ROUTES } from './constants/routes';
import { addNewUser } from './server/controllers/user.db';
import { userResolver } from './graphql/resolvers/user.resolver';
import { userSchema } from './graphql/schemas/user.schema';

import passport from './authentification/passport';
import { api } from './authentification/api';
import { config } from './authentification/config';

const app = new Koa();
const router = new Router();

app.use(serve('./dist'));

let initialState = {
    isFetching: false,
};

router.get('/', (ctx, next) => {
    const { preloadedState, content } = serverRender(initialState);

    ctx.response.body = template(
        'Server Rendered Page',
        preloadedState,
        content
    );
});

app.keys = config.session.keys;

app.use(session(app));
app.use(passport.initialize());
app.use(passport.session());

api = api(router);

router.use('/api', api.routes());

router.post(USER_ROUTES.ADD_NEW, (ctx, next) => {
    addNewUser(ctx);
    next();
});

router.post(
    USER_ROUTES.GET_BY_ID,
    graphqlHTTP({
        schema: userSchema,
        rootValue: userResolver,
        graphiql: false,
    })
);

router.all(
    '/graphql',
    graphqlHTTP({
        schema: userSchema,
        rootValue: userResolver,
        graphiql: true,
    })
);

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log('The server is listening on the 3000 port');
});
