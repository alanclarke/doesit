var _isEqual = require('lodash-compat/lang/isequal')
var assertions = {
  equal: function equal (actual, expected) {
    if (!_isEqual(actual, expected)) {
      throw new Error(String(actual) + ' is not deep equal to ' + String(expected))
    }
  },
  notEqual: function notEqual (actual, expected) {
    if (_isEqual(actual, expected)) {
      throw new Error(String(actual) + ' is deep equal to ' + String(expected))
    }
  }
}

assertions.eql = assertions.equal
assertions.notEql = assertions.notEqual

module.exports = assertions
