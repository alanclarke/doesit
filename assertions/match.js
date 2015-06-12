var assertions = {
  match: function match (value, pattern) {
    if (!new RegExp(pattern).test(value)) {
      throw new Error(String(value) + ' does not match ' + String(pattern))
    }
  },
  notMatch: function notMatch (value, pattern) {
    if (new RegExp(pattern).test(value)) {
      throw new Error(String(value) + ' matches ' + String(pattern))
    }
  }
}

module.exports = assertions
