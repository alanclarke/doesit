/* global describe, it */
var expect = require('expect.js')
var is = require('../lib/doesit'), does = is

describe('#truthy()', function () {
  it('should not throw an error if true', function () {
    expect(function () {
      is(true).truthy()
    }).not.to.throwError()
  })

  it('should not throw an error if truthy', function () {
    expect(function () {
      is('str').truthy()
    }).not.to.throwError()
  })

  it('should throw an error if false', function () {
    expect(function () {
      is(false).truthy()
    }).to.throwError()
  })

  it('should throw an error if falsey', function () {
    expect(function () {
      is('').truthy()
    }).to.throwError()
  })

  it('should provide an appropriate error message', function () {
    try {
      is(false).truthy()
    } catch (e) {
      expect(e.message).to.eql('false is not truthy')
    }
  })
})

describe('#notTruthy()', function () {
  it('should throw an error if true', function () {
    expect(function () {
      is(true).notTruthy()
    }).to.throwError()
  })

  it('should throw an error if truthy', function () {
    expect(function () {
      is('str').notTruthy()
    }).to.throwError()
  })

  it('should not throw an error if false', function () {
    expect(function () {
      is(false).notTruthy()
    }).not.to.throwError()
  })

  it('should not throw an error if falsey', function () {
    expect(function () {
      is('').notTruthy()
    }).not.to.throwError()
  })

  it('should provide an appropriate error message', function () {
    try {
      is(true).notTruthy()
    } catch (e) {
      expect(e.message).to.eql('true is truthy')
    }
  })

})
