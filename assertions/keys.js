var _keys = require('lodash-compat/object/keys')
var _pick = require('lodash-compat/object/pick')

function hasKeys (obj, keys) {
  return _keys(_pick(obj, keys)).length === keys.length
}

var assertions = {
  haveKeys: function haveKeys (collection, keys) {
    if (!hasKeys(collection, keys)) {
      throw new Error(String(collection) + ' does not have keys ' + String(keys))
    }
  },
  notHaveKeys: function notHaveKeys (collection, keys) {
    if (hasKeys(collection, keys)) {
      throw new Error(String(collection) + ' has keys ' + String(keys))
    }
  }
}

module.exports = assertions
