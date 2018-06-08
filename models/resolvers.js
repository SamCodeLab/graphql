const { merge } = require('lodash');
const Books = require('./books');

const resolvers = merge({
  Query: {
    health: ()=>{
      return "Ok!";
    }
  },
  Mutation: {
    health: ()=>{
      return "Ok!";
    }
  }
}, Books.resolvers);

module.exports = {
  resolvers,
  typeDefs: [`
type Query{
  health: String
}
type Mutation{
  health: String
}
`,...Books.typeDefs]
};
