var assertions = {
    greaterThan: function greaterThan (actual, expected) {
      if (actual <= expected) {
        throw new Error(String(actual) + ' is greater than ' + String(expected))
      }
    },
    notGreaterThan: function notGreaterThan (actual, expected) {
      if (actual > expected) {
        throw new Error(String(actual) + ' is not greater than ' + String(expected))
      }
    },
    lessThan: function lessThan (actual, expected) {
      if (actual >= expected) {
        throw new Error(String(actual) + ' is less than ' + String(expected))
      }
    },
    notLessThan: function notLessThan (actual, expected) {
      if (actual < expected) {
        throw new Error(String(actual) + ' is not less than ' + String(expected))
      }
    }
}

assertions.gt = assertions.greaterThan
assertions.gte = assertions.greaterThanOrEqualTo = assertions.notLessThan
assertions.lt = assertions.lessThan
assertions.lte = assertions.lessThanOrEqualTo = assertions.notGreaterThan

module.exports = assertions
