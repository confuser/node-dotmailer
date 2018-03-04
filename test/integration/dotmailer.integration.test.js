const assert = require('assert')
const config =
    { auth:
      { user: process.env.USER, pass: process.env.PASS }
    }
const dotMailer = require('../../')(config)
const fixtures = require('../fixtures')
let addressBookId

describe('dotmailer', function () {
  this.timeout(5000)

  it('should create an address book', function (done) {
    dotMailer('PostAddressBooks', fixtures.validAddressBook, function (error, addressBook) {
      assert.strictEqual(error, undefined)

      assert.strictEqual(addressBook.name, fixtures.validAddressBook.Name)
      assert.strictEqual(addressBook.visibility, fixtures.validAddressBook.Visibility)

      addressBookId = addressBook.id

      done()
    })
  })

  it('should update an address book', function (done) {
    var addressBookFixture = fixtures.validAddressBook
    addressBookFixture.Name = 'Testing Updating'

    dotMailer('UpdateAddressBook', addressBookId, addressBookFixture, function (error, addressBook) {
      assert.strictEqual(error, undefined)

      assert.strictEqual(addressBook.id, addressBookId)
      assert.strictEqual(addressBook.name, addressBookFixture.Name)

      done()
    })
  })

  it('should delete an address book', function (done) {
    dotMailer('DeleteAddressBook', addressBookId, function (error, res) {
      assert.strictEqual(error, undefined)
      assert.strictEqual(res, undefined)

      done()
    })
  })
})
