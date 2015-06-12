var assertions = {
  haveLength: function haveLength (value, length) {
    if (length !== value.length) {
      throw new Error(String(value) + ' does not have length ' + length)
    }
  },
  notHaveLength: function notHaveLength (value, length) {
    if (length === value.length) {
      throw new Error(String(value) + ' has length ' + length)
    }
  }
}

module.exports = assertions
