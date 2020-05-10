export const typeDefStoppingPoint = `
    scalar Date

    type StoppingPoint {
      id: ID,
      parentId: ID,
      name: String,
      startPoint: String,
      destinationPoint: String,
      dateFrom: Date,
      dateTo: Date,
    }
`;
