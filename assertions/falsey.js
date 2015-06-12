var assertions = {
  falsey: function falsey (val) {
    if (val) {
      throw new Error(String(val) + ' is not falsey')
    }
  },
  notFalsey: function notFalsey (val) {
    if (!val) {
      throw new Error(String(val) + ' is falsey')
    }
  }
}

module.exports = assertions
