const assert = require('assert')
const handleRequest = require('../lib/handle-request')

describe('Handle Request', function () {
  it('should call the passed callback', function (done) {
    const cb = function () { done() }
    const handle = handleRequest(cb)

    handle()
  })

  it('should return an error if unauthorised', function (done) {
    const cb = function (error) {
      assert.strictEqual(error.message, 'Unauthorised')

      done()
    }
    const handle = handleRequest(cb)

    handle(null, { statusCode: 401 })
  })

  it('should return the body', function (done) {
    const cb = function (error, body) {
      if (error) return done(error)

      assert(body)

      done()
    }
    const handle = handleRequest(cb)

    handle(null, { body: {} })
  })

  it('should return an error if a bad request', function (done) {
    const cb = function (error) {
      assert.strictEqual(error.message, 'test')

      done()
    }
    const handle = handleRequest(cb)

    handle(null, { statusCode: 400, body: { message: 'test' } })
  })
})
