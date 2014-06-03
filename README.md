# dotMailer

[![build status](https://secure.travis-ci.org/confuser/node-dotmailer.png)](http://travis-ci.org/confuser/node-dotmailer)

A 3rd party dotMailer v2 REST API implementation

## Installation

```
npm install dotmailer --save
```

## Usage
```dotMailer(ApiFunction, tokens..., dataObject, callback)```

- (Required) String ApiFunction - Function name, e.g. 'PostAddressBooks'
- (Optional) tokens - Query parameters that are passed as additional function arguments, can be String or Number, e.g. 123456
- (Optional) Object dataObject - Request body e.g. ```js { Name: 'Test Address Book', Visibility: 'Private' }```
- (Required) function callback(error, response) - Executed on completion


Tokens and dataObject may be required depending on the ApiFunction. Required tokens that are not used will throw an error.

Some requests return 204 meaning response within the callback will be undefined if successful.

## Documentation
Full documentation for the dotMailer API can be found at http://api.dotmailer.com/v2/help/wadl

## Example

```js
var config =
  { auth:
    { user: '', pass: '' }
    // Any other 'request' options here
  }
  , dotmailer = require('dotmailer')(config)
  , addressBookId = 123456

dotmailer('DeleteAddressBookContacts', addressBookId, function (error, res) {
  console.log(error, res)
})
```

## Tests
An integration test is provided which is not a part of ```npm test```

This test will create, update & delete an address book named 'Test Address Book'

To run:
```
USER=username@apiconnector.com PASS=pass mocha test/integration/dotmailer.integration.test.js
```

## Credits
[James Mortemore](https://github.com/confuser/)
