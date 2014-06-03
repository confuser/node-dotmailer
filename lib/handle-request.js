module.exports = function (cb) {
  return handle

  function handle(error, res) {
    if (error) return cb(error)

    if (!res || res.statusCode === 204) return cb()
    if (res.statusCode === 401) return cb(new Error('Unauthorised'))

    return cb(error, res.body)
  }
}
