'use strict';

// Environment variables that grunt will set when the server starts locally. Use for your api keys, secrets, etc.
// You will need to set these on the server you deploy to.
//
// This file should not be tracked by git.

module.exports = {
  DOMAIN: 'http://localhost:9000',
  SESSION_SECRET: "doingfine-secret",
  TWILIO_ACCOUNT_SID: 'ACcc6bd88977d0eddd1ff935ecbc2cacee',
  TWILIO_AUTH_TOKEN: 'c9ba89f331e84936155f1916a5bca2fb',

}; 