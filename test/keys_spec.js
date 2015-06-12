/* global describe, it */
var expect = require('expect.js')
var is = require('../lib/doesit'), does = is

describe('#haveKeys()', function () {
  it('should not throw an error if object has supplied keys', function () {
    expect(function () {
      does({a: 1, b: 2}).haveKeys(['a'])
      does({a: 1, b: 2}).haveKeys(['a', 'b'])
    }).not.to.throwError()
  })

  it('should throw an error if object does not have supplied keys', function () {
    expect(function () {
      does({a: 1, b: 2}).haveKeys(['c'])
    }).to.throwError()
    expect(function () {
      does({a: 1, b: 2}).haveKeys(['d', 'e'])
    }).to.throwError()
  })

})

describe('#notHaveKeys()', function () {
  it('should not throw an error if object does not have supplied keys', function () {
    expect(function () {
      does({a: 1, b: 2}).notHaveKeys(['c'])
    }).not.to.throwError()
    expect(function () {
      does({a: 1, b: 2}).notHaveKeys(['d', 'e'])
    }).not.to.throwError()
  })

  it('should throw an error if object does have supplied keys', function () {
    expect(function () {
      does({a: 1, b: 2}).notHaveKeys(['a'])
    }).to.throwError()
    expect(function () {
      does({a: 1, b: 2}).notHaveKeys(['a', 'b'])
    }).to.throwError()
  })

})
