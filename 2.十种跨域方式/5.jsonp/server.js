const http = require("http");
const url = require("url");

const server = http.createServer();

server.on("request", function(req, res) {
  var params = url.parse(req.url, true).query;
  var fn = params.jsonp;
  res.writeHead(200, { "Content-Type": "text/javascript" });
  res.write(fn + "(" + JSON.stringify(params) + ")");
  res.end();
});

server.listen(3000, function() {
  console.log("已经连接3000端口");
});
