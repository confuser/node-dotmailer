module.exports = function (method, path) {

  var tokens = path.match(/\{(.+?)\}/g)
    , restArgs = Array.prototype.slice.call(arguments, 2)
    , replaced = 0

  if (tokens && tokens.length !== 0) {
    tokens.forEach(function (token, i) {
      var isOptional = token.substring(token.length - 2, token.length) === '?}'

      if (isOptional) {
        // Optional
        if (restArgs[i] == undefined) {
          replaced++
          path = path.replace('/' + token, '')
          return
        }
      }

      replaced++

      if (restArgs[i] !== undefined) {
        path = path.replace(token, restArgs[i])
      }
    })
  }

  var unreplaced = path.match(/\{(.+?)\}/g)

  if (unreplaced && unreplaced.length !== 0) throw new Error('Unreplaced tokens')

  var req = { method: method, url: path }

  if (restArgs.length > replaced) {
    var json = restArgs[restArgs.length - 1]
    if (json && typeof json === 'object') req.json = json
  }

  return req

}
