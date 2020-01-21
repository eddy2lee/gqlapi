const { oss } = require('config')
const knex = require('local/knex')

module.exports = {
  Query: {
    memberSearch(parent, { params }, context, info) {
      return knex('user').limit(params.limit)
    },
    memberGet(parent, args, context, info) {
      return knex('user')
        .where('id', args.id)
        .first()
    }
  },
  Member: {
    portrait({ portrait }, { style }) {
      return `${oss.host}/${portrait}/?x-oss-process=style/${style}`
    },
    location({ location: { x, y } }) {
      return { lon: x, lat: y }
    }
  }
}
