import qql from 'graphql-tag';

export const getUserById = qql`
query User($id: ID!){
    user(id: $id) {
      name
      surname
      age
      address,
      trips{
          name
      }
    }
}
`;
