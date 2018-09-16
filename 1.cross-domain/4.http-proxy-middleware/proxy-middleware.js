const express = require("express");
const app = express();
const proxyMiddleWare = require("http-proxy-middleware");

const proxy = proxyMiddleWare("/", {
  target: "http://localhost:3000",
  changeOrigin: true
});
app.use("/*", proxy);

app.listen(4000, () => {
  console.log("监听3000端口");
});
