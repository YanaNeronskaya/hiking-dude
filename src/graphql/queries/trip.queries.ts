export const typeDefTrip = `
  type Trip {
    id: ID, 
    _id: ID,
    name: String
    country: String,
    city: String,
    totalPeriodDays: Int,
    stoppingPoints: [StoppingPoint],
  }
`;
