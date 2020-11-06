const http = require('http');

const unzipper = require('unzipper');
http.createServer(function (request, response) {
  request.pipe(unzipper.Extract({ path: '../server/public' }));
}).listen(8084);