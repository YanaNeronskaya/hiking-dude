// @ts-nocheck

import Koa from 'koa';
import Router from 'koa-router';
import graphqlHTTP from 'koa-graphql';
import serve from 'koa-static';
import session from 'koa-session';
import cors from '@koa/cors';

import { template } from './template';
import { serverRender } from '../dist/server.js';
import { USER_ROUTES } from './constants/routes';
import { addNewUser } from './server/controllers/user.db';
import { userSchema } from './graphql/schemas/user.schema';

import passport from './authentification/passport';
//import { api } from './authentification/api';
import { config } from './authentification/config';

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

//api = api(router);

//router.use('/api', api.routes());

router.post(USER_ROUTES.ADD_NEW, (ctx, next) => {
    addNewUser(ctx);
    next();
});

router.all(
    '/graphql',
    graphqlHTTP({
        schema: userSchema,
        graphiql: false
    })
);
app.use(cors());
app.use(router.routes()).use(router.allowedMethods());

router.get('/*', (ctx, next) => {
    const { content } = serverRender({ url: ctx.req.url });

    ctx.response.body = template('Server Rendered Page', content);
});

app.listen(process.env.PORT || 3000, () => {
    console.log('The server is listening on the 3000 port');
});
