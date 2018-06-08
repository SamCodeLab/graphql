module.exports = `
type Book{
  title: String!
  author: String!
}

extend type Query{
  books: [Book]

  book(id: Int): Book
}

extend type Mutation{
  new_book(title: String!, author: String!): Book
}
`;
