var nock = require('nock')
  , should = require('should')
  , config =
    { auth:
      { user: '', pass: '' }
    }
  , dotMailer = require('../')(config)

describe('dotmailer', function () {

  it('should add a single piece of transactional data to a contact', function (done) {
    // Mock the request
    nock('https://api.dotmailer.com')
      .post('/v2/contacts/transactional-data/123456')
      .reply(204)

    dotMailer('PostContactsTransactionalData', 123456, function (error, res) {
      should.not.exist(error)
      should.not.exist(res)

      done()
    })
  })

})
