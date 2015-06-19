var includes = require('lodash-compat/collection/includes')
var findValues = require('lodash-compat/collection/find')
var isArray = require('lodash-compat/lang/isarray')
var isMatch = require('lodash-compat/lang/ismatch')
var isEqual = require('lodash-compat/lang/isequal')
var isPlainObject = require('lodash-compat/lang/isplainobject')

function isIn (value, collection) {
  if (isPlainObject(collection)) {
    if (isPlainObject(value)) {
      return isMatch(collection, value)
    }
  }
  if (isArray(collection)) {
    return !!findValues(collection, isEqual.bind(isEqual, value))
  }
  return includes(collection, value)
}

module.exports = isIn
