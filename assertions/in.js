var _includes = require('lodash-compat/collection/includes')
var _keys = require('lodash-compat/object/keys')
var _find = require('lodash-compat/collection/find')
var _isArray = require('lodash-compat/lang/isarray')
var _isMatch = require('lodash-compat/lang/ismatch')
var _isEqual = require('lodash-compat/lang/isequal')
var _isPlainObject = require('lodash-compat/lang/isplainobject')

function valueIsIn (value, collection) {
  if (_isPlainObject(collection)) {
    if (_isPlainObject(value)) {
      return _isMatch(collection, value)
    }
  }
  if (_isArray(collection)) {
    return !!_find(collection, _isEqual.bind(_isEqual, value))
  }
  return _includes(collection, value)
}

var assertions = {
  in: function isIn (value, collection) {
    if (!valueIsIn(value, collection)) {
      throw new Error(String(value) + ' is not in ' + String(collection))
    }
  },
  notIn: function isNotIn (value, collection) {
    if (valueIsIn(value, collection)) {
      throw new Error(String(value) + ' is in ' + String(collection))
    }
  },
  contain: function contain (collection, value) {
    if (!valueIsIn(value, collection)) {
      throw new Error(String(collection) + ' does not contain ' + String(value))
    }
  },
  notContain: function notContain (collection, value) {
    if (valueIsIn(value, collection)) {
      throw new Error(String(collection) + ' contains ' + String(value))
    }
  }
}

module.exports = assertions
