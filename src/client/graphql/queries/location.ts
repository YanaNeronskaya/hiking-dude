import qql from 'graphql-tag';

export const getLocation = qql`
  query Location($id: String!, $str: String!) {
    location(id: $id, str: $str) {
      locationId,
      name,
      locationString,
      description,
    }
  }
`;
