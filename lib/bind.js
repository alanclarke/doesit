var bind = require('lodash-compat/function/bind')
var isFunction = require('lodash-compat/lang/isfunction')
var reduce = require('lodash-compat/collection/reduce')

module.exports = function bindAssertions (val, assertions) {
  return reduce(assertions, function (memo, assertion, name) {
    memo[name] = isFunction(assertion)
      ? bind(assertion, memo, val)
      : bindAssertions(val, assertion)
    return memo
  }, {})
}
