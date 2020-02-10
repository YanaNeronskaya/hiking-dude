// @ts-nocheck
import passport from 'koa-passport';
import FacebookStrategy from 'passport-facebook';

import { config } from './config';

passport.use(
    new FacebookStrategy(
        {
            clientID: config.facebook.clientId,
            clientSecret: config.facebook.clientSecret,
            callbackURL: config.facebook.callbackUrl,
            profileFields: config.facebook.profileFields,
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
