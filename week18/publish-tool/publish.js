const http = require('http');

const fs = require('fs');

let request = http.request({
  hostname: '127.0.0.1',
  port: 8090,
  method: 'POST',
  headers: {
    "Content-Type": "application/octet-stream"
  }
}, response => {
  console.log(response)
});

const file = fs.createReadStream('./a.html');
// file.on('data', chunk => {
//   console.log(chunk.toString());
//   request.write(chunk)
// })

// file.on('end', () => {
//   console.log('read finished');
//   request.end();
// });

file.pipe(request);

file.on('end', () => request.end())
