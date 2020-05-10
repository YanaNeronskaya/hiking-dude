import qql from 'graphql-tag';

export const getAutocompleteResult = qql`
  query AutoComplete($str: String!) {
    autocompleteResults(str: $str) {
      name,
      locationId,
      locationString
    }
  }
`;