const http = require("http");
const url = require("url");
const querystring = require("querystring");

const server = http.createServer();

let result = {
  code: 200,
  data: [
    { sort: "1", name: "小明", math: 80, english: 100 },
    { sort: "2", name: "小红", math: 90, english: 80 },
    { sort: "3", name: "小王", math: 70, english: 50 },
    { sort: "4", name: "小李", math: 90, english: 60 }
  ]
};
server.on("request", function(req, res) {
  switch (req.method) {
    case "GET":
      res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
      res.write(JSON.stringify(result));
      res.end();
      break;
    case "POST":
      var data = "";
      req.on("data", function(chunk) {
        data += chunk;
      });
      req.on("end", function() {
        data = querystring.parse(data.toString());
        if (data.math) {
          data.sort = +result.data[result.data.length - 1].sort + 1;
          result.data.push(data);
        } else {
          var result_ = JSON.parse(JSON.stringify(result));
          result_.data = result.data.filter(val => {
            return data.name === val.name;
          });
        }

        res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
        res.write(JSON.stringify(result_));
        res.end();
      });
      break;
    case "PUT":
      var data = "";
      req.on("data", function(chunk) {
        data += chunk;
      });

      req.on("end", function() {
        data = querystring.parse(data.toString());
        result.data = result.data.map(val => {
          if (data.name == val.name) {
            data.sort = result.data[result.data.length - 1].sort + 1;
            return data;
          } else {
            return val;
          }
        });
        res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
        res.write(JSON.stringify(result));
        res.end();
      });
      break;
    case "DELETE":
      var data = "";
      req.on("data", function(chunk) {
        data += chunk;
      });
      req.on("end", function() {
        data = querystring.parse(data.toString());

        result.data = result.data.filter(val => {
          return data.name !== val.name;
        });
        res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
        res.write(JSON.stringify(result));
        res.end();
      });
      break;
  }
});

server.listen(3000, function() {
  console.log("已经连接3000端口");
});
// res.header("Access-Control-Allow-Origin", "http://localhost:4000/");
