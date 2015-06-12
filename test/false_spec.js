/* global describe, it */
var expect = require('expect.js')
var is = require('../lib/doesit'), does = is

describe('#false()', function () {
  it('should not throw an error if false', function () {
    expect(function () {
      is(false).false()
    }).not.to.throwError()
  })

  it('should throw an error if falsey', function () {
    expect(function () {
      is('').false()
    }).to.throwError()
  })

  it('should throw an error if true', function () {
    expect(function () {
      is(true).false()
    }).to.throwError()
  })

  it('should provide an appropriate error message', function () {
    try {
      is(true).false()
    } catch (e) {
      expect(e.message).to.eql('true is not false')
    }
  })
})

describe('#notFalse()', function () {
  it('should not throw an error if true', function () {
    expect(function () {
      is(true).notFalse()
    }).not.to.throwError()
  })

  it('should not throw an error if truthy', function () {
    expect(function () {
      is('str').notFalse()
    }).not.to.throwError()
  })

  it('should throw an error if false', function () {
    expect(function () {
      is(false).notFalse()
    }).to.throwError()
  })

  it('should not throw an error if falsey', function () {
    expect(function () {
      is('').notFalse()
    }).not.to.throwError()
  })

  it('should provide an appropriate error message', function () {
    try {
      is(false).notFalse()
    } catch (e) {
      expect(e.message).to.eql('false is false')
    }
  })

})
