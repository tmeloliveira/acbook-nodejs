var fs = require('fs');

console.log('Before reading file');

var contents = fs.readFileSync('../lorem.txt', 'utf8');

console.log('After reading file');

console.log(contents);