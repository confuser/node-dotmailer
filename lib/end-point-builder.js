// Populate the end points but still requires some manual work
var request = require('request')
  , fs = require('fs')
  , path = require('path')
  , options =
    { url: 'http://api.dotmailer.com/v2/help/postman'
    , json: true
    , timeout: 30000
    }

request(options, function (error, res) {
  if (error) return console.error(error)

  var endPoints = res.body.requests
    , fileContent = '/* jslint maxlen: 200 */'

  fileContent += '\r\n'
  fileContent += 'var prepareRequest = require(\'./prepare-request\')'
  fileContent += '\r\n'
  fileContent += 'module.exports ='
  fileContent += '\r\n'
  fileContent += '{ '

  endPoints.forEach(function (request, index) {
    if (index !== 0) fileContent += ', '

    var url = request.url.replace('https://api.dotmailer.com/v2/', '')

    fileContent += '\'' + request.name + '\': prepareRequest.bind(null, \'' + request.method + '\', \'' + url + '\')'
    fileContent += '\r\n'

  })

  fileContent += '}'
  fileContent += '\r\n'

  fs.writeFileSync(path.join(__dirname, 'end-points.js'), fileContent)
})
