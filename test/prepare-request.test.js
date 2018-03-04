const assert = require('assert')
const prepareRequest = require('../lib/prepare-request')

describe('Prepare Request', function () {
  it('should return an object with method and url', function () {
    const preparedReq = prepareRequest('GET', 'foo')

    assert.strictEqual(preparedReq.method, 'GET')
    assert.strictEqual(preparedReq.url, 'foo')
  })

  it('should replace tokens within the path based on arguments', function () {
    const preparedReq = prepareRequest('PUT', 'hello/{foo}/{bar}/world', 'hello', 'tokens', 'here')

    assert.strictEqual(preparedReq.method, 'PUT')
    assert.strictEqual(preparedReq.url, 'hello/hello/tokens/world')
  })

  it('should throw an error if not all tokens are replaced', function () {
    try {
      prepareRequest('PUT', 'hello/{foo}/{bar}/world', 'hello')
    } catch (e) {
      assert.strictEqual(e.message, 'Unreplaced tokens')
    }
  })

  it('should accept falsy tokens', function () {
    const preparedReq = prepareRequest('GET', 'hello/{foo}/world', 0)

    assert.strictEqual(preparedReq.url, 'hello/0/world')
  })
})
