'use strict';

module.exports = [
  // Inputs
  { ids: ['DIN1', 'GPIO496'], gpioNo: 496, modes: [0], custom: { id: 'DIN1' } },
  { ids: ['DIN2', 'GPIO497'], gpioNo: 497, modes: [0], custom: { id: 'DIN2' } },
  { ids: ['DIN3', 'GPIO498'], gpioNo: 498, modes: [0], custom: { id: 'DIN3' } },
  { ids: ['DIN4', 'GPIO499'], gpioNo: 499, modes: [0], custom: { id: 'DIN4' } },
  // Outputs
  { ids: ['EN_RELAY', 'GPIO26'], gpioNo: 26, modes: [1], custom: { id: 'EN_RELAY' } },
  { ids: ['RELAY1', 'GPIO504'], gpioNo: 504, modes: [1], custom: { id: 'RELAY1' } },
  { ids: ['RELAY2', 'GPIO505'], gpioNo: 505, modes: [1], custom: { id: 'RELAY2' } },
  { ids: ['RELAY3', 'GPIO506'], gpioNo: 506, modes: [1], custom: { id: 'RELAY3' } },

  // Leds
  { ids: ['ledM:green'], ledPath: '/sys/class/leds/ledM:green', modes: [1] },
  { ids: ['ledM:red'], ledPath: '/sys/class/leds/ledM:red', modes: [1] },
  { ids: ['ledM:blue'], ledPath: '/sys/class/leds/ledM:blue', modes: [1] },
  { ids: ['led2green'], ledPath: '/sys/class/leds/led2green', modes: [1] },
  { ids: ['led2red'], ledPath: '/sys/class/leds/led2red', modes: [1] },
  { ids: ['led2blue'], ledPath: '/sys/class/leds/led2blue', modes: [1] }
];
