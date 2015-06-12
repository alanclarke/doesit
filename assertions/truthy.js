var assertions = {
  truthy: function truthy (val) {
    if (!val) {
      throw new Error(String(val) + ' is not truthy')
    }
  },
  notTruthy: function notTruthy (val) {
    if (val) {
      throw new Error(String(val) + ' is truthy')
    }
  }
}

assertions.ok = assertions.assert = assertions.truthy

module.exports = assertions
