const http = require('http');
const archiver = require('archiver')

const request = http.request({
  hostname: '127.0.0.1',
  port: 8084,
  method: 'POST',
  headers: {
    "Content-Type": "application/octet-stream"
  }
}, response => {
  console.log(response)
});


const archive = archiver('zip', {
  zlib: {
    level: 9
  },
})

archive.directory('./sample/', false);
archive.finalize();
archive.pipe(request)

request.on('end', () => {
  console.log('Success End ')
})