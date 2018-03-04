const nock = require('nock')
const assert = require('assert')
const config =
  { auth:
    { user: '', pass: '' }
  }
const dotMailer = require('../')(config)

describe('dotmailer', function () {
  it('should add a single piece of transactional data to a contact', function (done) {
    // Mock the request
    nock('https://api.dotmailer.com')
      .post('/v2/contacts/transactional-data/123456')
      .reply(204)

    dotMailer('PostContactsTransactionalData', 123456, function (error, res) {
      assert.strictEqual(error, undefined)
      assert.strictEqual(res, undefined)

      done()
    })
  })

  it('should return an error if required tokens not passed', function (done) {
    dotMailer('PostContactsTransactionalData', function (error) {
      assert.strictEqual(error.message, 'Unreplaced tokens')

      done()
    })
  })
})
