// @ts-nocheck

import passport from './passport';
import { BASE_ROUTES, USER_ROUTES } from '../constants/routes';

export let api = router => {
    // function* isLoggedIn(ctx, next) {
    //     if (ctx.request.isAuthenticated()) {
    //         yield next;
    //     } else {
    //         this.redirect('/api');
    //     }
    // }

    // // router.get(
    // //     '/login',
    // //     passport.authenticate('google', {
    // //         scope: ['https://www.googleapis.com/auth/plus.login'],
    // //     })
    // // );

    // router.get(
    //     '/auth/google/callback',
    //     passport.authenticate('google'),
    //     ctx => {
    //         const user = ctx.req.user;

    //         if (user.id) {
    //             ctx.res.body = user;
    //             //ctx.redirect(USER_ROUTES.USER_CABINET);
    //         } else ctx.redirect(BASE_ROUTES.ERROR_LOGIN);
    //     }
    // );

    // router.get('/logout', isLoggedIn, function*(next) {
    //     this.req.logout();
    //     this.body = {
    //         status: 'success',
    //         data: 'logout success',
    //     };
    // });

    // return router;
};
