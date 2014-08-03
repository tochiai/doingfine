'use strict';

var twilio = require('twilio');

// When twilio receives an SMS addressed to the registered DoingFine phone number, it makes a GET request to /api/twilio
// twilio can receive an twiML (xml) response with instructions (ie an SMS resonse message or phone call script)
// to update on twilio: https://www.twilio.com/user/account/phone-numbers/PN87b2b73d36ba81ded076a9e203e357eb
// previous xml request url in alpha app (nelson's pre-HR ios version): http://www.doingfineapp.com/twilio/sms-response.xml
exports.respond = function(req, res) {
  var senderPhone = req.query.From;
  var msg = req.query.Body;
  console.log('SMS received from ' + senderPhone + ': ' + msg);

  // form a twiML response (xml) like so:
  var twiml = new twilio.TwimlResponse();
  twiml.message('Hi, from DoingFine :)');

  res.set('Content-Type', 'text/xml');
  return res.send(200, twiml.toString());
};

function handleError(res, err) {
  return res.send(500, err);
};


/* Available from Twilio via request.query:

query:
   { ToCountry: 'US',
     ToState: 'CA',
     SmsMessageSid: 'SM717dcd406fd54735100db5800f810bb9',
     NumMedia: '0',
     ToCity: 'VENTURA',
     FromZip: '05666',
     SmsSid: 'SM717dcd406fd54735100db5800f810bb9',
     FromState: 'VT',
     SmsStatus: 'received',
     FromCity: 'MONTPELIER',
     Body: 'Dff',
     FromCountry: 'US',
     To: '+18052904005',
     ToZip: '93001',
     MessageSid: 'SM717dcd406fd54735100db5800f810bb9',
     AccountSid: 'ACcc6bd88977d0eddd1ff935ecbc2cacee',
     From: '+18027936146',
     ApiVersion: '2010-04-01' }

*/