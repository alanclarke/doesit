/* global describe, it */
var expect = require('expect.js')
var is = require('../lib/doesit'), does = is

describe('#true()', function () {
  it('should not throw an error if true', function () {
    expect(function () {
      is(true).true()
    }).not.to.throwError()
  })

  it('should throw an error if falsey', function () {
    expect(function () {
      is('').true()
    }).to.throwError()
  })

  it('should throw an error if false', function () {
    expect(function () {
      is(false).true()
    }).to.throwError()
  })

  it('should provide an appropriate error message', function () {
    try {
      is(false).true()
    } catch (e) {
      expect(e.message).to.eql('false is not true')
    }
  })
})

describe('#notTrue()', function () {
  it('should throw an error if true', function () {
    expect(function () {
      is(true).notTrue()
    }).to.throwError()
  })

  it('should not throw an error if truthy', function () {
    expect(function () {
      is('str').notTrue()
    }).not.to.throwError()
  })

  it('should not throw an error if false', function () {
    expect(function () {
      is(false).notTrue()
    }).not.to.throwError()
  })

  it('should provide an appropriate error message', function () {
    try {
      is(true).notTrue()
    } catch (e) {
      expect(e.message).to.eql('true is true')
    }
  })

})
