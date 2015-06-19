var assertions = {
  false: function isFalse (val) {
    if (val !== false) {
      throw new Error(String(val) + ' is not false')
    }
  },
  notFalse: function isNotFalse (val) {
    if (val === false) {
      throw new Error(String(val) + ' is false')
    }
  }
}

module.exports = assertions
