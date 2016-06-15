'use strict';

var EventEmitter = require('events').EventEmitter;

class Logger extends EventEmitter {
  constructor () {
    super();
  }
}

var logger = new Logger();

console.log('this is logger', logger);

logger.on('error', function(message){
  console.log('Error: ' + message);
});

logger.emit('error', 'All your base are belong to us.');