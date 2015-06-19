var assertions = {
  exactly: function strictEql (actual, expected) {
    if (actual !== expected) {
      throw new Error(String(actual) + ' does not exactly equal ' + String(expected))
    }
  },
  notExactly: function notStrictEql (actual, expected) {
    if (actual === expected) {
      throw new Error(String(actual) + ' exactly equals ' + String(expected))
    }
  }
}

module.exports = assertions
