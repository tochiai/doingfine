'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/twilio', function() {

  it('should respond with a twiML XML response', function(done) {
    request(app)
      .get('/api/twilio')
      .expect(200)
      .expect('Content-Type', /xml/)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});