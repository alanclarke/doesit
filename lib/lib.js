var _reduce = require('lodash-compat/collection/reduce')
var _merge = require('lodash-compat/object/merge')

module.exports = _reduce([
  require('../assertions/empty'),
  require('../assertions/equal'),
  require('../assertions/exactly'),
  require('../assertions/false'),
  require('../assertions/falsey'),
  require('../assertions/in'),
  require('../assertions/keys'),
  require('../assertions/length'),
  require('../assertions/match'),
  require('../assertions/number'),
  require('../assertions/throw'),
  require('../assertions/true'),
  require('../assertions/truthy'),
  require('../assertions/types'),
  require('../assertions/values')
], _merge, {})
