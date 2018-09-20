//一个静态服务器，启动静态资源文件
const http = require("http");
const fs = require("fs");
const app = http.createServer();

app.on("request", (req, res) => {
  console.log(__dirname + req.url);
  fs.readFile(__dirname + req.url, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      console.log("a", data.toString());
      res.write(data.toString());
    }
  });
});

app.listen(3000, () => {
  console.log("连接到3000端口");
});
