/* global describe, it */
var expect = require('expect.js')
var is = require('../lib/doesit'), does = is

describe('#have()', function () {
  it('should not throw an error if object has value', function () {
    expect(function () {
      does({ a: { b: { c: 1}}}).have('a')
      does({ a: { b: { c: 1}}}).have('a.b.c')
      does({ a: { b: { c: 1}}}).have(['a', 'b', 'c'])
      does({ a: { b: { c: 1}}}).have('a.b.c', 1)
    }).not.to.throwError()
  })

  it('should throw an error if object does not have value', function () {
    expect(function () {
      does({ a: { b: { c: 1}}}).have('b')
    }).to.throwError()
    expect(function () {
      does({ a: { b: { c: 1}}}).have('a.b.d')
    }).to.throwError()
    expect(function () {
      does({ a: { b: { c: 1}}}).have(['a', 'b', 'd'])
    }).to.throwError()
    expect(function () {
      does({ a: { b: { c: 1}}}).have('a.b.c', 2)
    }).to.throwError()
  })

})

describe('#notHave()', function () {
  it('should not throw an error if object does not have value', function () {
    expect(function () {
      does({ a: { b: { c: 1}}}).notHave('b')
      does({ a: { b: { c: 1}}}).notHave('a.b.d')
      does({ a: { b: { c: 1}}}).notHave(['a', 'b', 'd'])
      does({ a: { b: { c: 1}}}).notHave('a.b.c', 2)
    }).not.to.throwError()
  })

  it('should throw an error if object has value', function () {
    expect(function () {
      does({ a: { b: { c: 1}}}).notHave('a')
    }).to.throwError()
    expect(function () {
      does({ a: { b: { c: 1}}}).notHave('a.b.c')
    }).to.throwError()
    expect(function () {
      does({ a: { b: { c: 1}}}).notHave(['a', 'b', 'c'])
    }).to.throwError()
    expect(function () {
      does({ a: { b: { c: 1}}}).notHave('a.b.c', 1)
    }).to.throwError()
  })

})
