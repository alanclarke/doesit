var assertions = {
  throw: function throws (fn, err) {
    var thrown
    try {
      fn()
    } catch (e) {
      thrown = e
    }
    if (!thrown) {
      throw new Error(String(fn) + ' did not throw an error')
    }
    return thrown
  },
  notThrow: function notThrow (fn, err) {
    var thrown
    try {
      fn()
    } catch (e) {
      thrown = e
    }
    if (thrown) {
      throw new Error(String(fn) + ' threw an error')
    }
    return thrown
  }
}

module.exports = assertions
