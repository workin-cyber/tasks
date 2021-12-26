const uniqid = require('uniqid')
const DAL = require('../DAL')

function create(data) {
    data.id = uniqid()
    return DAL.create(data)
}

module.exports = { ...DAL, create }