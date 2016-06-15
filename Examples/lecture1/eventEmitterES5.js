var EventEmitter = require('events').EventEmitter;

var logger = new EventEmitter();

logger.on('error', function(message){
  console.log('Error: ' + message);
});

logger.emit('error', 'All your base are belong to us.');