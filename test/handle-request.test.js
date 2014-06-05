var should = require('should')
  , handleRequest = require('../lib/handle-request')

describe('Handle Request', function () {

  it('should call the passed callback', function (done) {
    var cb = function () { done() }
      , handle = handleRequest(cb)

    handle()
  })

  it('should return an error if unauthorised', function (done) {
    var cb = function (error) {
      should.exist(error)
      error.message.should.equal('Unauthorised')

      done()
    }
      , handle = handleRequest(cb)

    handle(null, { statusCode: 401 })
  })

  it('should return the body', function (done) {
    var cb = function (error, body) {
      should.not.exist(error)
      should.exist(body)

      done()
    }
      , handle = handleRequest(cb)

    handle(null, { body: {} })
  })

  it('should return an error if a bad request', function (done) {
    var cb = function (error) {
      should.exist(error)
      error.message.should.equal('test')

      done()
    }
      , handle = handleRequest(cb)

    handle(null, { statusCode: 400, body: { message: 'test' } })
  })
})
