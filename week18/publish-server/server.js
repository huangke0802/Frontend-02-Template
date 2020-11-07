const http = require('http');
const https = require('https');
const unzipper = require('unzipper');
const querystring = require('querystring');

// auth 路由：接受code，用code + client_id + client_secret 换 token
// 用token获取用户信息，检查权限
// publish路由：接受发布
//Client secrets:13a23edc5457e859ab5ba236e8e0eed77199ae51

function auth(request, response) {
  const query = querystring.parse(request.url.match(/^\/auth\?([\s\S]+)$/)[1]);
  getToken(query.code, (info) => {
    console.log(info, "info")
      // response.write(JSON.stringify(info));
    response.write(`<a href="http://localhost:8083/?token=${info.access_token}">publish</a>`)
    response.end();
  });
}

// 4. publish路由：用token获取用户信息，检查权限，接受发布
function publish(request, response) {

  const query = querystring.parse(request.url.match(/^\/publish\?([\s\S]+)$/)[1]);

  getUser(query.token, info => {
    if (info.login === 'huangke0802') {
      request.pipe(unzipper.Extract({
        path: '../server/public'
      }));
      request.on('end', () => {
        response.end("Success!")
      })
    }
  })


}

function getUser(token, callback) {
  const request = https.request({
    hostname: 'github.com',
    path: `/user`,
    port: 443,
    method: "GET",
    headers: {
      Authorization: `token ${token}`,
      "User-Agent": 'kevin-publish'
    }
  }, function(response) {
    let body = "";
    response.on('data', chunk => {
      console.log(chunk.toString());
      body += (chunk.toString());
    })
    response.on('end', () => {
      callback(JSON.parse(body));
    })
  });

  request.end();
}

function getToken(code, callback) {
  const request = https.request({
    hostname: 'github.com',
    path: `/login/oauth/access_token?code=${code}&client_id=Iv1.ee4f25957c54f846&client_secret=13a23edc5457e859ab5ba236e8e0eed77199ae51`,
    port: 443,
    method: "POST",
  }, function(response) {
    let body = "";
    response.on('data', chunk => {
      console.log(chunk.toString());
      body += (chunk.toString());
    })
    response.on('end', () => {
      callback(querystring.parse(body));
    })
  });

  request.end();

}


http.createServer(function(request, response) {
  if (request.url.match(/^\/auth\?/)) {
    return auth(request, response);
  }
  if (request.url.match(/^\/publish\?/)) {
    return publish(request, response);
  }

}).listen(8084);