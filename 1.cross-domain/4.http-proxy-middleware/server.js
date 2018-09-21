const http = require("http");
const querystring = require("querystring");

const app = http.createServer();

app.on("request", (req, res) => {
  if (req.method == "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("success get");
    res.end();
  }
  if (req.method === "POST") {
    let data = "";
    console.log(req.headers);
    req.on("data", chunk => {
      data += chunk;
    });

    req.on("end", () => {
      data = querystring.parse(data);
      res.write(querystring.stringify(data));
      res.end("123");
    });
  }
});

app.listen(3000, () => {
  console.log("已经连接上了3000");
});
