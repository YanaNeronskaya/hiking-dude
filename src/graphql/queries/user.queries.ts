export const typeDef = `
  type User {
    id: ID, 
    _id: ID, 
    name: String
    surname: String,
    email: String,
    age: Int,
    address: String,
    trips: [Trip],
  }
`;
