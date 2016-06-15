'use strict';

var EventEmitter = require('events').EventEmitter;

const Logger = () => {
  return Object.assign({}, {
    events: new EventEmitter
  });
};

var logger = Logger();

logger.events.on('error', function(message){
  console.log('Error: ' + message);
});

logger.events.emit('error', 'All your base are belong to us.');
