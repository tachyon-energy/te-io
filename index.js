'use strict';

var LinuxIO = require('linux-io'),
  util = require('util'),
  tePins = require('./te-pins');

function TachyonEnergy() {
  if (!(this instanceof TachyonEnergy)) {
    return new TachyonEnergy();
  }

  LinuxIO.call(this, {
    name: "te-io",
    pins: tePins,
    defaultI2cBus: 1,
    defaultLed: 'ledM:green'
  });

  setImmediate(function () {
    this.emit('connect');
    this.emit('ready');
  }.bind(this));
}
util.inherits(TachyonEnergy, LinuxIO);

module.exports = TachyonEnergy;

