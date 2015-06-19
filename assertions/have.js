var get = require('lodash-compat/object/get')
var isUndefined = require('lodash-compat/lang/isundefined')

function has (obj, attr, value) {
  var result = get(obj, attr)
  return !isUndefined(value) ? result === value : !isUndefined(result)
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
