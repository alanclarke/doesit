var reduce = require('lodash-compat/collection/reduce')
var getValues = require('lodash-compat/object/values')
var isIn = require('../lib/in')

var assertions = {
  haveValues: function hasValues (obj, values) {
    var objValues = getValues(obj)
    var missing = reduce(values, function (memo, value, key) {
      if (!isIn(value, objValues)) {
        memo.push(value)
      }
      return memo
    }, [])
    if (missing.length) {
      throw new Error(String(obj) + ' does not have values ' + String(missing))
    }
  },
  notHaveValues: function doesNotHaveValues (obj, values) {
    var objValues = getValues(obj)
    var notMissing = reduce(values, function (memo, value, key) {
      if (isIn(value, objValues)) {
        memo.push(value)
      }
      return memo
    }, [])
    if (notMissing.length) {
      throw new Error(String(obj) + ' has values ' + String(notMissing))
    }
  }
}

module.exports = assertions
