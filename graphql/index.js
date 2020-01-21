const expressGraphql = require('express-graphql')
const { makeExecutableSchema } = require('graphql-tools')

module.exports = expressGraphql(req => {
  const typeDefs = require('./schemas')
  const resolvers = require('./resolvers')
  
  return {
    schema: makeExecutableSchema({
      typeDefs,
      resolvers
    }),
    graphiql: true
  }
})
