const config =
  { auth: { user: '', pass: '' }
    // Any other 'request' options here
  }
const dotmailer = require('dotmailer')(config)

dotmailer('DeleteAddressBookContacts', 123456, function (error, res) {
  console.log(error, res)
})
