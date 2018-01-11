var http = require('http');
var httpProxy = require('http-proxy');

httpProxy.createProxyServer({
  target: 'http://104.236.46.127:5001'
}).listen(3000);

