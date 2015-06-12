/* global describe, it */
var expect = require('expect.js')
var is = require('../lib/doesit'), does = is

describe('#exactly()', function () {
  it('should not throw an error if exactly equal', function () {
    expect(function () {
      is('1').exactly('1')
      is(3).exactly(3)
      is(null).exactly(null)
      is(undefined).exactly(undefined)
    }).not.to.throwError()
  })

  it('should throw an error if objects are not exactly equal', function () {
    expect(function () {
      is({}).exactly({})
    }).to.throwError()
    expect(function () {
      is([1]).exactly([1])
    }).to.throwError()
    expect(function () {
      is(1).exactly('1')
    }).to.throwError()
  })
})

describe('#notExactly()', function () {
  it('should not throw an error if not exactly equal', function () {
    expect(function () {
      is('1').notExactly(1)
      is(3).notExactly(2)
      is({}).notExactly({})
      is([]).notExactly([])
    }).not.to.throwError()
  })

  it('should throw an error if objects are exactly equal', function () {
    expect(function () {
      is(1).notExactly(1)
    }).to.throwError()
    expect(function () {
      is('1').notExactly('1')
    }).to.throwError()
    expect(function () {
      is(null).notExactly(null)
    }).to.throwError()
  })
})
