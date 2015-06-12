var assertions = {
  true: function istrue (val) {
    if (val !== true) {
      throw new Error(String(val) + ' is not true')
    }
  },
  notTrue: function isNotTrue (val) {
    if (val === true) {
      throw new Error(String(val) + ' is true')
    }
  }
}

module.exports = assertions
