/* global describe, it */
var expect = require('expect.js')
var is = require('../lib/doesit'), does = is

describe('#haveValues()', function () {
  it('should not throw an error if object has supplied values', function () {
    expect(function () {
      does({a: 1, b: 2}).haveValues([1])
      does({a: 1, b: 2}).haveValues([1, 2])
    }).not.to.throwError()
  })

  it('should throw an error if object does not have supplied values', function () {
    expect(function () {
      does({a: 1, b: 2}).haveValues([3])
    }).to.throwError()
    expect(function () {
      does({a: 1, b: 2}).haveValues([3, 4])
    }).to.throwError()
  })

})

describe('#notHaveValues()', function () {
  it('should not throw an error if object does not have supplied values', function () {
    expect(function () {
      does({a: 1, b: 2}).notHaveValues([3])
    }).not.to.throwError()
    expect(function () {
      does({a: 1, b: 2}).notHaveValues([3, 4])
    }).not.to.throwError()
  })

  it('should throw an error if object does have supplied values', function () {
    expect(function () {
      does({a: 1, b: 2}).notHaveValues([1])
    }).to.throwError()
    expect(function () {
      does({a: 1, b: 2}).notHaveValues([1, 2])
    }).to.throwError()
  })

})
