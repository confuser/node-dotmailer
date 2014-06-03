var extend = require('lodash.assign')
  , request = require('request')
  , endPoints = require('./lib/end-points')
  , handleRequest = require('./lib/handle-request')

module.exports = function (options) {
  var defaultOptions = { json: true, timeout: 20000 }

  options = extend({}, defaultOptions, options)

  return send

  function send(endpoint) {
    var args = Array.prototype.slice.call(arguments, 1)
      , cb = args.pop()

    if (typeof cb !== 'function') throw new Error('Invalid callback, must be a function')
    if (!endPoints[endpoint]) throw new Error('Unknown API endpoint')

    var preparedRequest

    try {
      preparedRequest = extend({}, options, endPoints[endpoint].apply(null, args))
    } catch (e) {
      return cb(e)
    }

    preparedRequest.url = 'https://api.dotmailer.com/v2/' + preparedRequest.url

    request(preparedRequest, handleRequest(cb))
  }
}
