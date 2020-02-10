// @ts-nocheck

export const typeDefStoppingPoint = `
    scalar Date

    type StoppingPoint {
        id: ID,
        name: String,
        from: String,
        to: String,
        dateFrom: Date,
        dateTo: Date,
    }
`;

export const typeDefTrip = `
  type Trip {
    id: ID, 
    name: String
    userId: ID,
    address: String,
    totalPeriodDays: Int,
    stoppingPoints: [StoppingPoint],
  }
`;
