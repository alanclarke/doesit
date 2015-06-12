/* global describe, it */
var expect = require('expect.js')
var is = require('../lib/doesit'), does = is

describe('#empty()', function () {
  it('should not throw an error if empty', function () {
    expect(function () {
      is([]).empty()
      is({}).empty()
      is('').empty()
    }).not.to.throwError()
  })

  it('should throw an error if not empty', function () {
    expect(function () {
      is([1]).empty()
    }).to.throwError()
    expect(function () {
      is({a: 1}).empty()
    }).to.throwError()
    expect(function () {
      is('1').empty()
    }).to.throwError()
  })

  it('should provide an appropriate error message', function () {
    try {
      is('1').empty()
    } catch (e) {
      expect(e.message).to.eql('1 is not empty')
    }
  })

})

describe('#notEmpty()', function () {
  it('should not throw an error if not empty', function () {
    expect(function () {
      is([1]).notEmpty()
      is({a: 1}).notEmpty()
      is('1').notEmpty()
    }).not.to.throwError()
  })

  it('should throw an error if empty', function () {
    expect(function () {
      is([]).notEmpty()
    }).to.throwError()
    expect(function () {
      is({}).notEmpty()
    }).to.throwError()
    expect(function () {
      is('').notEmpty()
    }).to.throwError()
  })

  it('should provide an appropriate error message', function () {
    try {
      is('').notEmpty()
    } catch (e) {
      expect(e.message).to.eql(' is empty')
    }
  })
})
