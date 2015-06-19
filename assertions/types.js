var isArray = require('lodash-compat/lang/isarray')
var isBoolean = require('lodash-compat/lang/isboolean')
var isDate = require('lodash-compat/lang/isdate')
var isElement = require('lodash-compat/lang/iselement')
var isError = require('lodash-compat/lang/isError')
var isNotInfinite = require('lodash-compat/lang/isfinite')
var isFunction = require('lodash-compat/lang/isfunction')
var isNAN = require('lodash-compat/lang/isnan')
var isNative = require('lodash-compat/lang/isnative')
var isNull = require('lodash-compat/lang/isnull')
var isNumber = require('lodash-compat/lang/isnumber')
var isPlainObject = require('lodash-compat/lang/isplainobject')
var isRegExp = require('lodash-compat/lang/isregexp')
var isString = require('lodash-compat/lang/isstring')
var isTypedArray = require('lodash-compat/lang/istypedarray')
var isUndefined = require('lodash-compat/lang/isundefined')

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
    if (!isArray(val)) {
      throw new Error(String(val) + ' is not an array')
    }
  },
  notAnArray: function isNotArray (val) {
    if (isArray(val)) {
      throw new Error(String(val) + ' is an array')
    }
  },
  aBoolean: function isBoolean (val) {
    if (!isBoolean(val)) {
      throw new Error(String(val) + ' is not a boolean')
    }
  },
  notABoolean: function isNotBoolean (val) {
    if (isBoolean(val)) {
      throw new Error(String(val) + ' is a boolean')
    }
  },
  aDate: function isDate (val) {
    if (!isDate(val)) {
      throw new Error(String(val) + ' is not a date')
    }
  },
  notADate: function isNotDate (val) {
    if (isDate(val)) {
      throw new Error(String(val) + ' is a date')
    }
  },
  anElement: function isElement (val) {
    if (!isElement(val)) {
      throw new Error(String(val) + ' is not an element')
    }
  },
  notAnElement: function isNotElement (val) {
    if (isElement(val)) {
      throw new Error(String(val) + ' is an element')
    }
  },
  anError: function isError (val) {
    if (!isError(val)) {
      throw new Error(String(val) + 'is not an error')
    }
  },
  notAnError: function isNotError (val) {
    if (isError(val)) {
      throw new Error(String(val) + ' is an error')
    }
  },
  finite: function finite (val) {
    if (!isNotInfinite(val)) {
      throw new Error(String(val) + ' is not finite')
    }
  },
  notFinite: function notFinite (val) {
    if (isNotInfinite(val)) {
      throw new Error(String(val) + ' is finite')
    }
  },
  aFunction: function isFunction (val) {
    if (!isFunction(val)) {
      throw new Error(String(val) + ' is not a function')
    }
  },
  notAFunction: function isNotFunction (val) {
    if (isFunction(val)) {
      throw new Error(String(val) + ' is a function')
    }
  },
  nan: function isNan (val) {
    if (!isNAN(val)) {
      throw new Error(String(val) + ' is not nan')
    }
  },
  notNan: function isNotNan (val) {
    if (isNAN(val)) {
      throw new Error(String(val) + ' is nan')
    }
  },
  native: function isNative (val) {
    if (!isNative(val)) {
      throw new Error(String(val) + ' is not native')
    }
  },
  notNative: function isNotNative (val) {
    if (isNative(val)) {
      throw new Error(String(val) + ' is native')
    }
  },
  null: function isNull (val) {
    if (!isNull(val)) {
      throw new Error(String(val) + ' is not null')
    }
  },
  notNull: function isNotNull (val) {
    if (isNull(val)) {
      throw new Error(String(val) + ' is null')
    }
  },
  aNumber: function isNumber (val) {
    if (!isNumber(val)) {
      throw new Error(String(val) + 'is not a number')
    }
  },
  notANumber: function isNotNumber (val) {
    if (isNumber(val)) {
      throw new Error(String(val) + ' is a number')
    }
  },
  anObject: function isObject (val) {
    if (!isPlainObject(val)) {
      throw new Error(String(val) + 'is not an object')
    }
  },
  notAnObject: function isNotObject (val) {
    if (isPlainObject(val)) {
      throw new Error(String(val) + ' is an object')
    }
  },
  aRegExp: function isRegExp (val) {
    if (!isRegExp(val)) {
      throw new Error(String(val) + ' is not a regexp')
    }
  },
  notARegExp: function isNotRegexp (val) {
    if (isRegExp(val)) {
      throw new Error(String(val) + ' is a regexp')
    }
  },
  aString: function isString (val) {
    if (!isString(val)) {
      throw new Error(String(val) + ' is not a string')
    }
  },
  notAString: function isNotString (val) {
    if (isString(val)) {
      throw new Error(String(val) + ' is a string')
    }
  },
  aTypedArray: function isTypedArray (val) {
    if (!isTypedArray(val)) {
      throw new Error(String(val) + ' is not a typed array')
    }
  },
  notATypedArray: function isNotTypedArray (val) {
    if (isTypedArray(val)) {
      throw new Error(String(val) + ' is a typed array')
    }
  },
  defined: function isUndefined (val) {
    if (isUndefined(val)) {
      throw new Error(String(val) + ' is not undefined')
    }
  },
  notDefined: function isNotUndefined (val) {
    if (!isUndefined(val)) {
      throw new Error(String(val) + ' is undefined')
    }
  }
}

assertions.a = assertions.an
assertions.notA = assertions.notAn

module.exports = assertions
