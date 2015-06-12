var _merge = require('lodash-compat/object/merge')
var _isFunction = require('lodash-compat/lang/isfunction')
var bind = require('./bind')
var lib = require('./lib')

function init (assertions) {
  function isit (value) {
    return bind(value, assertions)
  }

  function extend (o) {
    if (_isFunction(o)) {
      return init(o(assertions))
    }
    return init(_merge(assertions, o))
  }

  isit.extend = extend
  return isit
}

module.exports = init(lib)
