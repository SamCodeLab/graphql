const resolvers = {
  Book: {
    title: root => root.title,
    author: root => root.author,
  },
  Query: {
    books: (root, {}, context) => context.Books.getAll(),
    book: (root, {id}, context) => context.Books.get({id}),
  },
  Mutation: {
    new_book: (root, {title, author}, context) => context.Books.create({title, author}),
  },
}

module.exports = resolvers;
