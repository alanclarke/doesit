var _isArguments = require('lodash-compat/lang/isArguments')
var _isArray = require('lodash-compat/lang/isArray')
var _isBoolean = require('lodash-compat/lang/isBoolean')
var _isDate = require('lodash-compat/lang/isDate')
var _isElement = require('lodash-compat/lang/isElement')
var _isError = require('lodash-compat/lang/isError')
var _isFinite = require('lodash-compat/lang/isFinite')
var _isFunction = require('lodash-compat/lang/isFunction')
var _isNaN = require('lodash-compat/lang/isNaN')
var _isNative = require('lodash-compat/lang/isNative')
var _isNull = require('lodash-compat/lang/isNull')
var _isNumber = require('lodash-compat/lang/isNumber')
var _isPlainObject = require('lodash-compat/lang/isPlainObject')
var _isRegExp = require('lodash-compat/lang/isRegExp')
var _isString = require('lodash-compat/lang/isString')
var _isTypedArray = require('lodash-compat/lang/isTypedArray')
var _isUndefined = require('lodash-compat/lang/isUndefined')

/*
is(value).an(Error) // alias 'a'
is(value).notAn(Error) // alias 'notA'
is(value).anArray()
is(value).notAnArray()
is(value).aBoolean()
is(value).notABoolean()
is(value).aDate()
is(value).notADate()
is(value).anElement()
is(value).notAnElement()
is(value).anError()
is(value).notAnError()
is(value).finite()
is(value).notFinite()
is(value).aFunction()
is(value).notAFunction()
is(value).nan()
is(value).notNan()
is(value).native()
is(value).notNative()
is(value).null()
is(value).notNull()
is(value).aNumber()
is(value).notANumber()
is(value).anObject() // checks whether the value is a json style object
is(value).notAnObject()
is(value).aRegExp()
is(value).notARegExp()
is(value).aString()
is(value).notAString()
is(value).aTypedArray()
is(value).notATypedArray()
is(value).defined()
is(value).notDefined()
*/

var assertions = {
  an: function (val, classInstance) {
    if (!(val instanceof classInstance)) {
      throw new Error(String(val) + ' is not an instance of ' + String(classInstance))
    }
  },
  notAn: function (val, classInstance) {
    if (val instanceof classInstance) {
      throw new Error(String(val) + ' is an instance of ' + String(classInstance))
    }
  },
  anArray: function isArray (val) {
    if (!_isArray(val)) {
      throw new Error(String(val) + ' is not an array')
    }
  },
  notAnArray: function isNotArray (val) {
    if (_isArray(val)) {
      throw new Error(String(val) + ' is an array')
    }
  },
  aBoolean: function isBoolean (val) {
    if (!_isBoolean(val)) {
      throw new Error(String(val) + ' is not a boolean')
    }
  },
  notABoolean: function isNotBoolean (val) {
    if (_isBoolean(val)) {
      throw new Error(String(val) + ' is a boolean')
    }
  },
  aDate: function isDate (val) {
    if (!_isDate(val)) {
      throw new Error(String(val) + ' is not a date')
    }
  },
  notADate: function isNotDate (val) {
    if (_isDate(val)) {
      throw new Error(String(val) + ' is a date')
    }
  },
  anElement: function isElement (val) {
    if (!_isElement(val)) {
      throw new Error(String(val) + ' is not an element')
    }
  },
  notAnElement: function isNotElement (val) {
    if (_isElement(val)) {
      throw new Error(String(val) + ' is an element')
    }
  },
  anError: function isError (val) {
    if (!_isError(val)) {
      throw new Error(String(val) + 'is not an error')
    }
  },
  notAnError: function isNotError (val) {
    if (_isError(val)) {
      throw new Error(String(val) + ' is an error')
    }
  },
  finite: function isFinite (val) {
    if (!_isFinite(val)) {
      throw new Error(String(val) + ' is not finite')
    }
  },
  notFinite: function isNotFinite (val) {
    if (_isFinite(val)) {
      throw new Error(String(val) + ' is finite')
    }
  },
  aFunction: function isFunction (val) {
    if (!_isFunction(val)) {
      throw new Error(String(val) + ' is not a function')
    }
  },
  notAFunction: function isNotFunction (val) {
    if (_isFunction(val)) {
      throw new Error(String(val) + ' is a function')
    }
  },
  nan: function isNan (val) {
    if (!_isNaN(val)) {
      throw new Error(String(val) + ' is not nan')
    }
  },
  notNan: function isNotNan (val) {
    if (_isNaN(val)) {
      throw new Error(String(val) + ' is nan')
    }
  },
  native: function isNative (val) {
    if (!_isNative(val)) {
      throw new Error(String(val) + ' is not native')
    }
  },
  notNative: function isNotNative (val) {
    if (_isNative(val)) {
      throw new Error(String(val) + ' is native')
    }
  },
  null: function isNull (val) {
    if (!_isNull(val)) {
      throw new Error(String(val) + ' is not null')
    }
  },
  notNull: function isNotNull (val) {
    if (_isNull(val)) {
      throw new Error(String(val) + ' is null')
    }
  },
  aNumber: function isNumber (val) {
    if (!_isNumber(val)) {
      throw new Error(String(val) + 'is not a number')
    }
  },
  notANumber: function isNotNumber (val) {
    if (_isNumber(val)) {
      throw new Error(String(val) + ' is a number')
    }
  },
  anObject: function isObject (val) {
    if (!_isPlainObject(val)) {
      throw new Error(String(val) + 'is not an object')
    }
  },
  notAnObject: function isNotObject (val) {
    if (_isPlainObject(val)) {
      throw new Error(String(val) + ' is an object')
    }
  },
  aRegExp: function isRegExp (val) {
    if (!_isRegExp(val)) {
      throw new Error(String(val) + ' is not a regexp')
    }
  },
  notARegExp: function isNotRegexp (val) {
    if (_isRegExp(val)) {
      throw new Error(String(val) + ' is a regexp')
    }
  },
  aString: function isString (val) {
    if (!_isString(val)) {
      throw new Error(String(val) + ' is not a string')
    }
  },
  notAString: function isNotString (val) {
    if (_isString(val)) {
      throw new Error(String(val) + ' is a string')
    }
  },
  aTypedArray: function isTypedArray (val) {
    if (!_isTypedArray(val)) {
      throw new Error(String(val) + ' is not a typed array')
    }
  },
  notATypedArray: function isNotTypedArray (val) {
    if (_isTypedArray(val)) {
      throw new Error(String(val) + ' is a typed array')
    }
  },
  defined: function isUndefined (val) {
    if (_isUndefined(val)) {
      throw new Error(String(val) + ' is not undefined')
    }
  },
  notDefined: function isNotUndefined (val) {
    if (!_isUndefined(val)) {
      throw new Error(String(val) + ' is undefined')
    }
  }
}

assertions.a = assertions.an
assertions.notA = assertions.notAn

module.exports = assertions
