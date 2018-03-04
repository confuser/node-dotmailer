const extend = require('lodash.assign')
const request = require('request')
const endPoints = require('./lib/end-points')
const handleRequest = require('./lib/handle-request')

module.exports = function (options) {
  var defaultOptions = { json: true, timeout: 20000, baseUrl: 'https://api.dotmailer.com/v2/' }

  options = extend({}, defaultOptions, options)

  return send

  function send (endpoint) {
    const args = Array.prototype.slice.call(arguments, 1)
    const cb = args.pop()

    if (typeof cb !== 'function') throw new Error('Invalid callback, must be a function')
    if (!endPoints[endpoint]) throw new Error('Unknown API endpoint')

    var preparedRequest

    try {
      preparedRequest = extend({}, options, endPoints[endpoint].apply(null, args))
    } catch (e) {
      return cb(e)
    }

    request(preparedRequest, handleRequest(cb))
  }
}
