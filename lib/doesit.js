var merge = require('lodash-compat/object/merge')
var isFunction = require('lodash-compat/lang/isfunction')
var bindAssertions = require('./bind')
var lib = require('./lib')

function init (assertions) {
  function isit (value) {
    return bindAssertions(value, assertions)
  }

  function extend (o) {
    if (isFunction(o)) {
      return init(o(assertions))
    }
    return init(merge(assertions, o))
  }

  isit.extend = extend
  return isit
}

module.exports = init(lib)
