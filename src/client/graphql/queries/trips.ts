import qql from 'graphql-tag';

export const getAllTrips = qql`
  {
    trips {
      _id
      name,
      country,
      city,
      totalPeriodDays
    }
  }
`;
