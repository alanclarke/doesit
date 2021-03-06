var getKeys = require('lodash-compat/object/keys')
var pick = require('lodash-compat/object/pick')

function hasKeys (obj, keys) {
  return getKeys(pick(obj, keys)).length === keys.length
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
