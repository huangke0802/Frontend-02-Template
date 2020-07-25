const http = require('http');

http.createServer((requset, response) => {
  let body = [];
  requset.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    console.log('body:', body);
    response.writeHead(200, {
      'Content-Type': 'text/html'
    });
    response.end(" Hello World\n");
  });
}).listen(8088)

console.log('server started')