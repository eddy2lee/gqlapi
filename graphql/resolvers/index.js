const GMR = require('graphql-merge-resolvers')

module.exports = GMR.merge([
  require('./member')
])