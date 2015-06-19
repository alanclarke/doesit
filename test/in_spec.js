/* global describe, it */

var expect = require('expect.js')
var is = require('../lib/doesit'), does = is

describe('#in()', function () {

  describe('objects', function () {

    describe('values', function () {
      it('should not throw an error if the values are present', function () {
        expect(function () {
          is(1).in({a: 1})
        }).not.to.throwError()
      })

      it('should throw an error if the values are not present', function () {
        expect(function () {
          is(2).in({a: 1})
        }).to.throwError()
      })
    })

    describe('subset', function () {
      it('should not throw an error if the object is a subset', function () {
        expect(function () {
          is({a: 1}).in({a: 1, b: 1})
        }).not.to.throwError()
      })

      it('should throw an error if the object is not a subset', function () {
        expect(function () {
          is({a: 2}).in({a: 1, b: 1})
        }).to.throwError()
        expect(function () {
          is({c: 1}).in({a: 1, b: 1})
        }).to.throwError()
      })
    })

  })

  describe('arrays', function () {
    it('should not throw an error if the value is in the array', function () {
      expect(function () {
        is({a: 1}).in([{a: 1}, {b: 1}])
      }).not.to.throwError()
      expect(function () {
        is(1).in([1, 2, 3])
      }).not.to.throwError()
    })

    it('should throw an error if the value is not in the array', function () {
      expect(function () {
        is({a: 2}).in({a: 1, b: 1})
      }).to.throwError()
      expect(function () {
        is(1).in([2, 3, 4])
      }).to.throwError()
    })

  })

  describe('strings', function () {
    it('should not throw an error if the value is in the string', function () {
      expect(function () {
        is('foo').in('foobar')
      }).not.to.throwError()
    })

    it('should throw an error if the value is not in the string', function () {
      expect(function () {
        is('boo').in('hoo')
      }).to.throwError()
    })

  })
})

describe('#notIn()', function () {

  describe('objects', function () {

    describe('values', function () {
      it('should throw an error if the values are present', function () {
        expect(function () {
          is(1).notIn({a: 1})
        }).to.throwError()
      })

      it('should not throw an error if the values are not present', function () {
        expect(function () {
          is(2).notIn({a: 1})
        }).not.to.throwError()
      })
    })

    describe('subset', function () {
      it('should throw an error if the object is a subset', function () {
        expect(function () {
          is({a: 1}).notIn({a: 1, b: 1})
        }).to.throwError()
      })

      it('should not throw an error if the object is not a subset', function () {
        expect(function () {
          is({a: 2}).notIn({a: 1, b: 1})
        }).not.to.throwError()
        expect(function () {
          is({c: 1}).notIn({a: 1, b: 1})
        }).not.to.throwError()
      })
    })

  })

  describe('arrays', function () {
    it('should throw an error if the value is in the array', function () {
      expect(function () {
        is({a: 1}).notIn([{a: 1}, {b: 1}])
      }).to.throwError()
      expect(function () {
        is(1).notIn([1, 2, 3])
      }).to.throwError()
    })

    it('should not throw an error if the value is not in the array', function () {
      expect(function () {
        is({a: 2}).notIn({a: 1, b: 1})
      }).not.to.throwError()
      expect(function () {
        is(1).notIn([2, 3, 4])
      }).not.to.throwError()
    })

  })

  describe('strings', function () {
    it('should throw an error if the value is in the string', function () {
      expect(function () {
        is('foo').notIn('foobar')
      }).to.throwError()
    })

    it('should not throw an error if the value is not in the string', function () {
      expect(function () {
        is('boo').notIn('hoo')
      }).not.to.throwError()
    })

  })
})
