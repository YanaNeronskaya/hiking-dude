import qql from 'graphql-tag';

export const userLogOut = qql`
    mutation {
        logout {
            _id
            email
        }
    }
`;

export const userLogIn = qql`
    mutation Login($email: String, $password:String) {
        login(email: $email, password: $password) {
            _id
            email
        }
    }
`;

export const userSignUp = qql`
    mutation Signup($email: String, $password:String) {
        signup(email: $email, password: $password) {
            _id
            email
        }
    }
`;