exports.Package = require('../../package.json');

exports.Events = {
  DEBUG: 'debug',
  WARNING: 'warning'
};

exports.Errors = {
  BAD_LOGIN: 'Incorrect login details were provided.',
  UNKNOWN_PACKET_ID: 'Unknown packet, needs to be defined within the packets utility file, and tested if nessecery: '
};

exports.Status = {
  READY: 0,
  CONNECTING: 1,
  RECONNECTING: 2,
  IDLE: 3,
  DISCONNECTED: 4
};

exports.Endpoints = {
  login: 'https://login.agni.lindenlab.com/cgi-bin/login.cgi'
};
