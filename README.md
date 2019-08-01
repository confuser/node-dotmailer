# dotMailer

[![build status](https://secure.travis-ci.org/confuser/node-dotmailer.png)](http://travis-ci.org/confuser/node-dotmailer)
[![Known Vulnerabilities](https://snyk.io/test/github/confuser/node-dotmailer/badge.svg?targetFile=package.json)](https://snyk.io/test/github/confuser/node-dotmailer?targetFile=package.json)

A 3rd party dotMailer v2 REST API implementation

## Installation

```
npm install dotmailer --save
```

## Usage
```dotMailer({endpoint, tokens, config, callback})```
  
- (Required) endpoint (String) - Function name, e.g. 'PostAddressBooks'
- (Optional) tokens (Array) - Query parameters that are passed as additional function arguments, can be String or Number, e.g. 123456  
- (Required) config (Object) - Request type & options. 

```
  Example:

  {
    type: 'json',
    options: {
      Name: 'Test Address Book', 
      Visibility: 'Private'
    }
  }
```

- (Required) callback (Function) - (error, response) Executed on completion

Tokens may be required depending on the endpoint. Required tokens that are not used will throw an error.

Some requests return 204 meaning response within the callback will be undefined if successful.

## Documentation
Full documentation for the dotMailer API can be found at http://api.dotmailer.com/v2/help/wadl

## Example

```js
var config =
  { auth:
    { user: '', pass: '' }
    baseUrl: 'https://r1-api.dotmailer.com/v2/' // Account region endpoint
    // Any other 'request' options here
  }
  , dotmailer = require('dotmailer')(config)
  , addressBookId = 123456

dotmailer({
  endpoint: 'DeleteAddressBookContacts',
  tokens: [addressBookId],
  config: {
    type: 'json',
    options: {}
  }
  callback: (error, res) => {
    console.log(error, res)
  })
```

## Tests
An integration test is provided which is not a part of ```npm test```

This test will create, update & delete an address book named 'Test Address Book'

To run:
```
USER=username@apiconnector.com 
PASS=pass 

$ mocha test/integration/dotmailer.integration.test.js
```

## Credits
- [James Mortemore](https://github.com/confuser/)
- [John Field](https://johnfield.github.io/)
- [Ian Crowther](https://github.com/iancrowther/)
