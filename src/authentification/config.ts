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
};
