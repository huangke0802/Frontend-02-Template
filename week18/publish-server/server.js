const http = require('http');
const https = require('https');
const unzipper = require('unzipper');

// auth 路由：接受code，用code + client_id + client_secret 换 token
// 用token获取用户信息，检查权限
// publish路由：接受发布
//Client secrets:13a23edc5457e859ab5ba236e8e0eed77199ae51

function auth(request, response){

}

http.createServer(function (request, response) {
  // if(request.url.match(/auth/)){
  //   return auth(request, response);
  // }

  // request.pipe(unzipper.Extract({ path: '../server/public' }));
}).listen(8084);