const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const graphqlPlayground = require('graphql-playground-middleware-express').default

// Schema
const GQL = require('./models/resolvers');

const typeDefs = GQL.typeDefs.join('');
const resolvers = GQL.resolvers;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// Initialize the app
const app = express();

// Import Models
const Books = require('./models/books/models');


// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress(req => {
  return {
    schema,
    context: {
      Books: Books,
    }
  }
}));

app.get('/graphiql', graphqlPlayground({ endpoint: '/graphql' }))

// Start the server
app.listen(3000, () => {
  console.log('Go to http://localhost:3000/graphiql to run queries!');
});
