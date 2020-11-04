let http = require('http');

let request = http.request({}, response => {
  console.log(response)
});

request.end();