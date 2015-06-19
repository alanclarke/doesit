module.exports = function createError (message, actual, expected, showDiff) {
  var err = new Error(message)
  err.actual = actual
  err.expected = expected
  err.showDiff = showDiff
  return err
}
