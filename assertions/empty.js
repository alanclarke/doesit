var isEmpty = require('lodash-compat/lang/isempty')
var error = require('../lib/error')

var assertions = {
  empty: function empty (value) {
    if (!isEmpty(value)) {
      throw error(String(value) + ' is not empty', value)
    }
  },
  notEmpty: function notEmpty (value) {
    if (isEmpty(value)) {
      throw new Error(String(value) + ' is empty')
    }
  }
}

module.exports = assertions
