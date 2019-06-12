const request = require('request')
const endPoints = require('./lib/end-points')
const handleRequest = require('./lib/handle-request')

module.exports = function (options) {
  const defaultOptions = { timeout: 20000, baseUrl: 'https://api.dotmailer.com/v2/' }

  let _options = Object.assign({}, defaultOptions, options)

  function configFactory ({type, options}) {
    if (type === 'formData') return Object.setPrototypeOf(options, { isFormData: true })
    else return Object.setPrototypeOf(options, { isJson: true })
  }

  return function send ({endpoint, tokens, config, cb}) {
    const _config = configFactory(config)

    if (typeof cb !== 'function') throw new Error('Invalid callback, must be a function')
    if (!endPoints[endpoint]) throw new Error('Unknown API endpoint')

    let preparedRequest

    try {
      preparedRequest = Object.assign({}, _options, endPoints[endpoint].apply(null, [tokens, _config]))
    } catch (e) {
      return cb(e)
    }

    request(preparedRequest, handleRequest(cb))
  }
}
