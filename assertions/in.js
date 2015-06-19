var valueIsIn = require('../lib/in')

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
