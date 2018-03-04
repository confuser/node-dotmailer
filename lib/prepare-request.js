module.exports = function (method, path) {
  const tokens = path.match(/\{(.+?)\}/g)
  const restArgs = Array.prototype.slice.call(arguments, 2)
  let replaced = 0

  if (tokens && tokens.length !== 0) {
    tokens.forEach(function (token, i) {
      const isOptional = token.substring(token.length - 2, token.length) === '?}'

      if (isOptional) {
        // Optional
        if (restArgs[i] === undefined) {
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

  const unreplaced = path.match(/\{(.+?)\}/g)

  if (unreplaced && unreplaced.length !== 0) throw new Error('Unreplaced tokens')

  const req = { method: method, url: path }

  if (restArgs.length > replaced) {
    const json = restArgs[restArgs.length - 1]
    if (json && typeof json === 'object') req.json = json
  }

  return req
}
