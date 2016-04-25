var http = require('http');

http.createServer( function(request, response) {
  response.writeHead(200);
  response.write('Thanks for sharing ...');
  request.on('readable', function() {
    console.log('Reading');
    var data = null;
    while(null !== (data = request.read())){
      console.log(data.toString());
    }
  });

  request.on('end', function() {
    console.log('Ending');
    response.end();
  });
}).listen(8080,  function() {
  console.log('Listening on port 8080...');
});