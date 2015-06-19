/* global describe, it */
var expect = require('expect.js')
var is = require('../lib/doesit'), does = is

describe('#falsey()', function () {
  it('should not throw an error if false', function () {
    expect(function () {
      is(false).falsey()
    }).not.to.throwError()
  })

  it('should not throw an error if falsey', function () {
    expect(function () {
      is('').falsey()
    }).not.to.throwError()
  })

  it('should throw an error if true', function () {
    expect(function () {
      is(true).falsey()
    }).to.throwError()
  })

  it('should throw an error if truthy', function () {
    expect(function () {
      is(1).falsey()
    }).to.throwError()
  })

  it('should provide an appropriate error message', function () {
    try {
      is(true).falsey()
    } catch (e) {
      expect(e.message).to.eql('true is not falsey')
    }
  })
})

describe('#notFalsey()', function () {
  it('should not throw an error if true', function () {
    expect(function () {
      is(true).notFalsey()
    }).not.to.throwError()
  })

  it('should not throw an error if truthy', function () {
    expect(function () {
      is('str').notFalsey()
    }).not.to.throwError()
  })

  it('should throw an error if false', function () {
    expect(function () {
      is(false).notFalsey()
    }).to.throwError()
  })

  it('should throw an error if falsey', function () {
    expect(function () {
      is('').notFalsey()
    }).to.throwError()
  })

  it('should provide an appropriate error message', function () {
    try {
      is(false).notFalsey()
    } catch (e) {
      expect(e.message).to.eql('false is falsey')
    }
  })

})
