// @ts-nocheck
import passport from 'koa-passport';
import {OAuth2Strategy} from 'passport-google-oauth';

import { config } from './config';

passport.use(
    new OAuth2Strategy(
        {
            clientID: config.google.clientId,
            clientSecret: config.google.clientSecret,
            callbackURL: config.google.callbackUrl,
        },
        (accessToken, refreshToken, profile, done) => {
            return done(null, profile);
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

export default passport;
