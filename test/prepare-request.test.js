var prepareRequest = require('../lib/prepare-request')

require('should')

describe('Prepare Request', function () {

  it('should return an object with method and url', function () {
    var preparedReq = prepareRequest('GET', 'foo')

    preparedReq.method.should.equal('GET')
    preparedReq.url.should.equal('foo')
  })

  it('should replace tokens within the path based on arguments', function () {
    var preparedReq = prepareRequest('PUT', 'hello/{foo}/{bar}/world', 'hello', 'tokens', 'here')

    preparedReq.method.should.equal('PUT')
    preparedReq.url.should.equal('hello/hello/tokens/world')
  })

  it('should throw an error if not all tokens are replaced', function () {
    try {
      prepareRequest('PUT', 'hello/{foo}/{bar}/world', 'hello')
    } catch (e) {
      e.message.should.equal('Unreplaced tokens')
    }
  })
})
