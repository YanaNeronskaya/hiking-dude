export const config = {
    session: {
        keys: ['ThisIsSecretKey93464850'],
    },
    facebook: {
        clientId: 2767069573379638,
        clientSecret: '7cc67cc312f1a9aa860d4c798d26b36c',
        callbackUrl: 'http://localhost:3000/api/auth/callback',
        profileFields: ['id', 'displayName', 'photos', 'email'],
    },
    google: {
        clientId: '662995311811-j286cauh5ed375sjufi2400lbsbufd0f.apps.googleusercontent.com',
        clientSecret: 'bdaZ77TiApF2kFXwtWyj0FC8',
        callbackUrl: 'http://localhost:3000/api/auth/google/callback',
    }
};
