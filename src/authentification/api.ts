// @ts-nocheck

import passport from './passport';

export const api = router => {
    function* isLoggedIn(next) {
        if (this.req.isAuthenticated()) {
            yield next;
        } else {
            this.redirect('/api');
        }
    }

    router.get('/auth', function*(next) {
        if (this.req.user) {
            this.redirect('/api/success');
        } else {
            this.body = {
                status: 'success',
                data:
                    "Hi! If you see this message, it means you're not login yet",
            };
        }
    });

    router.get(
        '/login',
        passport.authenticate('facebook', {
            scope: ['public_profile', 'email'],
        })
    );

    router.get(
        '/auth/callback',
        passport.authenticate('facebook', {
            successRedirect: '/api/success',
            failureRedirect: '/api',
        })
    );

    router.get('/success', isLoggedIn, function*(next) {
        this.body = {
            status: 'success',
            data: this.req.user,
        };
    });

    router.get('/logout', isLoggedIn, function*(next) {
        this.req.logout();
        this.body = {
            status: 'success',
            data: 'logout success',
        };
    });

    return router;
};
