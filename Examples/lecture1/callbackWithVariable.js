var message = 'Hi I\'m inside the callback';

var callback = function () {
  console.log(message);
};

setTimeout(callback, 2000);

console.log('Waiting 2 seconds...');
