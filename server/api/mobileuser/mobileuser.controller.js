'use strict';

var _ = require('lodash');
var Mobileuser = require('./mobileuser.model');
var twilio = require('../../components/df.twilio/df.twilio.js');
// Get list of mobileusers
exports.index = function(req, res) {
  console.log('req query', req.query);
  if(req.query.phone && req.query.udid){
    Mobileuser.find({phone: req.query.phone, udid: req.query.udid, name: req.query.name}, function (err, mobileusers) {
      if(err) { return handleError(res, err); }
      return res.json(200, mobileusers);
    });
  } else {
    Mobileuser.find(function (err, mobileusers) {
      if(err) { return handleError(res, err); }
      return res.json(200, mobileusers);
    });
  }
};

// Get a single mobileuser
exports.show = function(req, res) {
  Mobileuser.findById(req.params.id, function (err, mobileuser) {
    if(err) { return handleError(res, err); }
    if(!mobileuser) { return res.send(404); }
    return res.json(mobileuser);
  });
};

// Creates a new mobileuser in the DB.
exports.create = function(req, res) {
  if(!req.body.code){
    var code = Math.floor(Math.random()*9999);
    twilio.sendText(req.body.phone, 'Doing Fine confirmation code: ' + code);
    req.body.code = code;
    req.body.verified = false;
  } 
  console.log('req body for mobileuser creation: ', req.body);
  Mobileuser.create(req.body, function(err, mobileuser) {
    if(err) { return handleError(res, err); }
    return res.json(201, mobileuser);
  });
};

// Updates an existing mobileuser in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Mobileuser.findById(req.params.id, function (err, mobileuser) {
    if (err) { return handleError(res, err); }
    if(!mobileuser) { return res.send(404); }
    var updated = _.merge(mobileuser, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, mobileuser);
    });
  });
};

// Deletes a mobileuser from the DB.
exports.destroy = function(req, res) {
  Mobileuser.findById(req.params.id, function (err, mobileuser) {
    if(err) { return handleError(res, err); }
    if(!mobileuser) { return res.send(404); }
    mobileuser.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

exports.verify = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Mobileuser.findById(req.params.id, function (err, mobileuser) {
    if (err) { return handleError(res, err); }
    if(!mobileuser) { return res.send(404); }
    if(req.body.code === mobileuser.code){
      var updated = _.merge(mobileuser, {verified: true});
      updated.save(function (err) {
        if (err) { return handleError(res, err); }
        return res.json(200, mobileuser);
      });
    } else {
      res.send(401, mobileuser);
    }
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
