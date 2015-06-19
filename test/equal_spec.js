/* global describe, it */
var expect = require('expect.js')
var is = require('../lib/doesit'), does = is

describe('#equal()', function () {
  it('should not throw an error if deep equal', function () {
    expect(function () {
      does({a: 1, b: { c: 1}, d: [1]}).equal({a: 1, b: { c: 1}, d: [1]})
      does([1, 2, 3, {}]).equal([1, 2, 3, {}])
      does(2).equal(2)
    }).not.to.throwError()
  })

  it('should not throw an error if equal', function () {
    expect(function () {
      does('1').equal('1')
      does(3).equal(3)
      does(null).equal(null)
      does(undefined).equal(undefined)
    }).not.to.throwError()
  })

  it('should throw an error if not deep equal', function () {
    expect(function () {
      does({a: 1, b: { c: 1}, d: [1]}).equal({a: 1, b: { c: 1}, d: [2]})
    }).to.throwError()
    expect(function () {
      does([1, 2, 3, {}]).equal([1, 2, 4, {}])
    }).to.throwError()
    expect(function () {
      does(2).equal(1)
    }).to.throwError()
  })

})

describe('#notEqual()', function () {
  it('should not throw an error if not deep equal', function () {
    expect(function () {
      does({a: 1, b: { c: 1}, d: [1]}).notEqual({a: 1, b: { c: 1}, d: [2]})
      does([1, 2, 3, {}]).notEqual([1, 2, 4, {}])
      does(2).notEqual(3)
    }).not.to.throwError()
  })

  it('should throw an error if deep equal', function () {
    expect(function () {
      does({a: 1, b: { c: 1}, d: [1]}).notEqual({a: 1, b: { c: 1}, d: [1]})
    }).to.throwError()
    expect(function () {
      does([1, 2, 3, {}]).notEqual([1, 2, 3, {}])
    }).to.throwError()
    expect(function () {
      does(2).notEqual(2)
    }).to.throwError()
  })

})
