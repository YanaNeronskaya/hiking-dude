// @ts-nocheck

import Koa from 'koa';
import Router from 'koa-router';
import graphqlHTTP from 'koa-graphql';
import serve from 'koa-static';
import session from 'koa-session';
import cors from '@koa/cors';

import { template } from './template';
import { serverRender } from '../dist/server.js';
import { connectDb } from './server/db';
import passport from './authentification/passport';
import { rootSchema } from './graphql/schemas';
import { config } from './authentification/config';
import { BASE_ROUTES, USER_ROUTES } from './constants/routes';

connectDb();

const app = new Koa();
const router = new Router();

app.use(serve('./dist'));

app.keys = config.session.keys;
app.secret = 'hiking dude';
app.saveUninitialized = true;
app.resave = true;
app.use(session(app));
app.use(passport.initialize());
app.use(passport.session());

router.all(
    '/graphql',
    graphqlHTTP({
        schema: rootSchema,
        graphiql: true,
    })
);

app.use(cors());
app.use(router.routes()).use(router.allowedMethods());

router.get(
    [
        BASE_ROUTES.HOME,
        BASE_ROUTES.ERROR_LOGIN,
        BASE_ROUTES.TRIPS_COLLECTIONS,
        BASE_ROUTES.TRIPS_COLLECTIONS_LOCATION,
        USER_ROUTES.USER_CABINET,
        USER_ROUTES.SIGN_IN,
        USER_ROUTES.LOG_IN,
    ],
    (ctx, next) => {
        const { content } = serverRender({ url: ctx.req.url });

        ctx.response.body = template('Server Rendered Page', content);
    }
);

app.listen(process.env.PORT || 3000, () => {
    console.log('The server is listening on the 3000 port');
});
