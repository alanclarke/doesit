# doesit

Doesit aims to be a concise, expressive, extensible and ubiquitous assertion library.

- concise: convenient, non-verbose api
- expressive: idiomatic syntax
- extensible: very easy to extend and write plugins for
- ubiquitous: works in all browsers and platforms

## why?
Apart from conciseness, which isn't a bad aim, I feel that *doesit's* syntax is pleasantly idiomatic.

```javascript
// expectation
it("should equal five", function () {
  // check whether it actually does
  expect(x).toEqual(5)
})
```

In the above code, the function body expresses an expectation, but really, it checks if the expected value actually *is* true. Therefore, you could argue that the following is more idiomatic:

```javascript
var is = require('./lib/doesit'), does = is
// expectation
it("should equal five", function () {
  // check whether it actually does
  does(x).eql(5)
})
```


## API

```javascript
var is = require('./lib/doesit'), does = is
is(x).true()
does(x).equal(y)
```

### Extending doesit
Adding new assertions is pretty easy and just involves calling *extend* with your custom assertions. For example, the following extends doesit with a palindrome assertion:

```javascript
var is = require('./lib/doesit'), does = is

// note this returns the extended lib without modifying the original
is = does = is.extend({
  palindrome: function (value) {
    if (!isPalindrome(value)) {
      throw new Error(String(value) + ' is not a palindrome')
    }
  }
})

function isPalindrome (value) {
  var reversed = value.split('').reverse().join('');
  return value === reversed;
}

it('should consider "hannah" a palindrome', function () {
  is('hannah').palindrome()
})

```

### Equality
```javascript
// equivalence
does(value).equal(expectedValue) // alias eql
does(value).notEqual(expectedValue) // alias notEql
// strict equality
is(value).exactly(expectedValue)
is(value).notExactly(expectedValue)
```

### Arrays
```javascript
is([]).empty()
is([]).notEmpty()
does([]).haveLength(0)
does([]).notHaveLength(0)
is(1).in([1, 2, 3])
is(2).notIn([1, 2, 3])
does([1, 2, 3]).contain(1)
does([1, 2, 3]).notContain(1)
```

### Objects
```javascript
is({}).empty()
is({}).notEmpty()
is({ a: 1 }).in({ a: 1, b: 2 })
is({ a: 1 }).notIn({ a: 1, b: 2 })
does({ a: 1, b: 1 }).contain({ a: 1 })
does({ a: 1, b: 1 }).notContain({ a: 1 })
does({ a: 1, b: 2}).haveKeys(['a', 'b'])
does({ a: 1, b: 2}).notHaveKeys(['a', 'b'])
does({ a: { b: { c: 1}}}).have('a') // true
does({ a: { b: { c: 1}}}).have('a.b.c') // true
does({ a: { b: { c: 1}}}).have(['a' 'b' 'c']) // true
does({ a: { b: { c: 1}}}).have('a.b.c', 1) // true
does({ a: { b: { c: 1}}}).notHave('a.b.c', 2) // true
does({ a: { b: { c: 1}}}).notHave('a') // true
```

### Functions
```javascript
does(fn).throw() // returns the error so you can test the message
does(fn).notThrow()
```

### Numbers
```javascript
is(1).greaterThan(2) // alias gt
is(1).notGreaterThan(2) // alias lte, lessThanOrEqualTo
is(1).lessThan(2) // alias lt
is(1).notLessThan(2) // alias gte, greaterThanOrEqualTo
```

### Strings
```javascript
is('foo').in('foobar')
is('foo').notIn('foobar')
does('foobar').contain('foo')
does('foobar').notContain('foo')

```

### RegExp
```javascript
does('hello').match(/hello/)
does('foo').notMatch(/bar/)
```

### Type checking
```javascript
is(value).an(Error) // alias 'a'
is(value).notAn(Error) // alias 'notA'
is(value).anArray()
is(value).notAnArray()
is(value).aBoolean()
is(value).notABoolean()
is(value).aDate()
is(value).notADate()
is(value).anElement()
is(value).notAnElement()
is(value).anError()
is(value).notAnError()
is(value).finite()
is(value).notFinite()
is(value).aFunction()
is(value).notAFunction()
is(value).nan()
is(value).notNan()
is(value).native()
is(value).notNative()
is(value).null()
is(value).notNull()
is(value).aNumber()
is(value).notANumber()
is(value).anObject() // checks whether the value is a json style object
is(value).notAnObject()
is(value).aRegExp()
is(value).notARegExp()
is(value).aString()
is(value).notAString()
is(value).aTypedArray()
is(value).notATypedArray()
is(value).defined()
is(value).notDefined()
```
