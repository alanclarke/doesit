/* global describe, it */
var expect = require('expect.js')
var is = require('../lib/doesit'), does = is

describe('#in()', function () {

  describe('objects', function () {

    describe('values', function () {
      it('should not throw an error if the values are present', function () {
        expect(function () {
          does({a: 1}).contain(1)
        }).not.to.throwError()
      })

      it('should throw an error if the values are not present', function () {
        expect(function () {
          does({a: 1}).contain(2)
        }).to.throwError()
      })
    })

    describe('subset', function () {
      it('should not throw an error if the object is a subset', function () {
        expect(function () {
          does({a: 1, b: 1}).contain({a: 1})
        }).not.to.throwError()
      })

      it('should throw an error if the object is not a subset', function () {
        expect(function () {
          does({a: 1, b: 1}).contain({a: 2})
        }).to.throwError()
        expect(function () {
          does({a: 1, b: 1}).contain({c: 1})
        }).to.throwError()
      })
    })

  })

  describe('arrays', function () {
    it('should not throw an error if the value is in the array', function () {
      expect(function () {
        does([{a: 1}, {b: 1}]).contain({a: 1})
      }).not.to.throwError()
      expect(function () {
        does([1, 2, 3]).contain(1)
      }).not.to.throwError()
    })

    it('should throw an error if the value is not in the array', function () {
      expect(function () {
        does({a: 1, b: 1}).contain({a: 2})
      }).to.throwError()
      expect(function () {
        does([2, 3, 4]).contain(1)
      }).to.throwError()
    })

  })

  describe('strings', function () {
    it('should not throw an error if the value is in the string', function () {
      expect(function () {
        does('foobar').contain('foo')
      }).not.to.throwError()
    })

    it('should throw an error if the value is not in the string', function () {
      expect(function () {
        does('hoo').contain('boo')
      }).to.throwError()
    })

  })
})


describe('.notContain()', function () {

  describe('objects', function () {

    describe('values', function () {
      it('should throw an error if the values are present', function () {
        expect(function () {
          does({a: 1}).notContain(1)
        }).to.throwError()
      })

      it('should not throw an error if the values are not present', function () {
        expect(function () {
          does({a: 1}).notContain(2)
        }).not.to.throwError()
      })
    })

    describe('subset', function () {
      it('should throw an error if the object is a subset', function () {
        expect(function () {
          does({a: 1, b: 1}).notContain({a: 1})
        }).to.throwError()
      })

      it('should not throw an error if the object is not a subset', function () {
        expect(function () {
          does({a: 1, b: 1}).notContain({a: 2})
        }).not.to.throwError()
        expect(function () {
          does({a: 1, b: 1}).notContain({c: 1})
        }).not.to.throwError()
      })
    })

  })

  describe('arrays', function () {
    it('should throw an error if the value is in the array', function () {
      expect(function () {
        does([{a: 1}, {b: 1}]).notContain({a: 1})
      }).to.throwError()
      expect(function () {
        does([1, 2, 3]).notContain(1)
      }).to.throwError()
    })

    it('should not throw an error if the value is not in the array', function () {
      expect(function () {
        does({a: 1, b: 1}).notContain({a: 2})
      }).not.to.throwError()
      expect(function () {
        does([2, 3, 4]).notContain(1)
      }).not.to.throwError()
    })

  })

  describe('strings', function () {
    it('should throw an error if the value is in the string', function () {
      expect(function () {
        does('foobar').notContain('foo')
      }).to.throwError()
    })

    it('should not throw an error if the value is not in the string', function () {
      expect(function () {
        does('hoo').notContain('boo')
      }).not.to.throwError()
    })

  })
})
