'use strict';

var xml = '<?xml version="1.0" encoding="UTF-8" ?><Response><Message>The message you responded to was an scheduled text from DoingFineApp.com. If you would like to contact the person who is using DoingFine to stay in touch, please look them up in your contacts on your phone. --- Thank you. DoingFineApp.com "Peace of Mind on Autopilot."</Message></Response>';

// When twilio receives an SMS addressed to the DoingFine phone number it makes a GET request to /api/twilio
exports.respond = function(req, res) {
  console.log('TWILIO REQUEST ', req.params);
  res.set('Content-Type', 'text/xml');
  return res.send(200, xml);
};

function handleError(res, err) {
  return res.send(500, err);
};