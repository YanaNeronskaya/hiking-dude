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
    mutation Signup($name: String, $surname: String, $residence: String, $email: String, $password:String) {
        signup(name: $name, surname: $surname, residence: $residence, email: $email, password: $password) {
            _id
            name,
            surname, 
            residence,
            email
        }
    }
`;