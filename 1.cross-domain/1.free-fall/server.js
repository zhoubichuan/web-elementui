const http = require("http");
const url = require("url");
const querystring = require("querystring");

const server = http.createServer();

server.on("request", function(req, res) {
  if (req.method === "POST") {
    var data = "";
    req.on("data", function(chunk) {
      data += chunk;
    });
    req.on("end", function() {
      data = querystring.parse(data);
      console.log(data);
      res.write(JSON.stringify(data));
      res.end();
    });
  }
});

server.listen(3000, function() {
  console.log("已经连接3000端口");
});
res.header("Access-Control-Allow-Origin", "http://localhost:4000/");
