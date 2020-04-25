import qql from 'graphql-tag';

export const getCurrentUser = qql`
  {
    user {
      _id
      email
      name
    }
  }
`;
