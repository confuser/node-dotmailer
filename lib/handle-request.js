module.exports = function (cb) {
  return handle

  /* jshint maxcomplexity: 7 */
  function handle(error, res) {
    if (error) return cb(error)

    if (!res || res.statusCode === 204) return cb()

    if (res.statusCode === 400 && res.body) {
      var errorRes = res.body
        , errorMsg = errorRes.message || errorRes

      return cb(new Error(errorMsg))
    }

    if (res.statusCode === 401) return cb(new Error('Unauthorised'))

    return cb(error, res.body)
  }
}
