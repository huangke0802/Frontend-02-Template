const http = require('http');

const fs = require('fs');

http.createServer(function (request, response) {

  const outFile = fs.createWriteStream('../server/public/index.html');

  // request.on('data', chunk => {
  //   outFile.write(chunk);
  // });
  // request.on('end', () => {
  //   outFile.end();
  //   response.end('Success');
  // })

  request.pipe(outFile);
}).listen(8083);