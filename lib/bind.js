var _bind = require('lodash-compat/function/bind')
var _isFunction = require('lodash-compat/lang/isFunction')
var _reduce = require('lodash-compat/collection/reduce')

module.exports = function bind (val, assertions) {
  return _reduce(assertions, function (memo, assertion, name) {
    memo[name] = _isFunction(assertion)
      ? _bind(assertion, memo, val)
      : bind(val, assertion)
    return memo
  }, {})
}
