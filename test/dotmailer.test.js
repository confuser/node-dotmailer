const nock = require('nock')
const assert = require('assert')
const config = { auth: { user: '', pass: '' } }
const dotMailer = require('../')(config)
const fs = require('fs')

describe('dotmailer', function () {
  it('should add a single piece of transactional data to a contact', function (done) {
    // Mock the request
    nock('https://api.dotmailer.com')
      .post('/v2/contacts/transactional-data/123456')
      .reply(204)

    dotMailer({
      endpoint: 'PostContactsTransactionalData',
      tokens: [123456],
      config: {type: 'json', options: {}},
      cb: (error, res) => {
        assert.strictEqual(error, undefined)
        assert.strictEqual(res, undefined)

        done()
      }
    })
  })

  it('should return an error if required tokens not passed', function (done) {
    dotMailer({
      endpoint: 'PostContactsTransactionalData',
      tokens: [],
      config: {type: 'json', options: {}},
      cb: (error, res) => {
        assert.strictEqual(error.message, 'Unreplaced tokens')

        done()
      }
    })
  })

  it('should import contacts using formData', function (done) {
    // Mock the request
    nock('https://api.dotmailer.com')
      .post('/v2/address-books/1234/contacts/import')
      .reply(202)

    const options = {
      file: {
        value: fs.createReadStream(`${__dirname}/contacts.csv`),
        options: {
          filename: 'contacts.csv',
          contentType: 'text/csv',
          contentDisposition: 'contacts.csv'
        }
      }
    }

    dotMailer({
      endpoint: 'PostAddressBookContactsImport',
      tokens: [1234],
      config: {type: 'formData', options},
      cb: (error, res) => {
        assert.strictEqual(error, undefined)
        assert.strictEqual(res, undefined)

        done()
      }
    })
  })
})
