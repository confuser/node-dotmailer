var should = require('should')
  , config =
    { auth:
      { user: process.env.USER, pass: process.env.PASS }
    }
  , dotMailer = require('../../')(config)
  , fixtures = require('../fixtures')
  , addressBookId

describe('dotmailer', function () {
  this.timeout(5000)

  it('should create an address book', function (done) {

    dotMailer('PostAddressBooks', fixtures.validAddressBook, function (error, addressBook) {
      should.not.exist(error)
      should.exist(addressBook)

      addressBook.name.should.equal(fixtures.validAddressBook.Name)
      addressBook.visibility.should.equal(fixtures.validAddressBook.Visibility)

      addressBookId = addressBook.id

      done()
    })
  })

  it('should update an address book', function (done) {
    var addressBookFixture = fixtures.validAddressBook
    addressBookFixture.Name = 'Testing Updating'

    dotMailer('UpdateAddressBook', addressBookId, addressBookFixture, function (error, addressBook) {
      should.not.exist(error)
      should.exist(addressBook)

      addressBook.id.should.equal(addressBookId)
      addressBook.name.should.equal(addressBookFixture.Name)

      done()
    })
  })

  it('should delete an address book', function (done) {
    dotMailer('DeleteAddressBook', addressBookId, function (error, res) {
      should.not.exist(error)
      should.not.exist(res)

      done()
    })
  })

})
