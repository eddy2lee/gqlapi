const express = require('express')
const graphql = require('./graphql')
const app = express()

app.use('/gql', graphql)

app.listen(80, () => {
  console.log("graphql server is ok, port is 3000");
})