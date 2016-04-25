var http = require('http');
var StringDecoder = require('string_decoder').StringDecoder;

var options = {
    host: 'localhost',
    port: 8080,
    path: '/',
    method: 'POST'
};

var request = http.request(options, function(response){
    response.on('data', function(data){
        var decoder = new StringDecoder('utf8');
        console.log( decoder.write(data));
    });
});

request.write('Are you alive?');
request.end();