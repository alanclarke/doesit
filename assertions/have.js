var _get = require('lodash-compat/object/get')
var _isUndefined = require('lodash-compat/lang/isundefined')

function has (obj, attr, value) {
  var result = _get(obj, attr)
  return !_isUndefined(value) ? result === value : !_isUndefined(result)
}

var assertions = {
  have: function have (collection, attr, value) {
    if (!has(collection, attr, value)) {
      var suffix = value ? ' ' + String(value) : ''
      throw new Error(String(collection) + ' does not have ' + String(attr) + suffix)
    }
  },
  notHave: function notHave (collection, attr, value) {
    if (has(collection, attr, value)) {
      var suffix = value ? ' ' + String(value) : ''
      throw new Error(String(collection) + ' does have ' + String(attr) + suffix)
    }
  }
}

module.exports = assertions
