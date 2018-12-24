const express = require("express");
const app = express();
const proxyMiddleWare = require("http-proxy-middleware");

app.use(
  proxyMiddleWare("/*", {
    target: "http://localhost:3000",
    changeOrigin: true
  })
);

app.listen(4000, () => {
  console.log("监听4000端口");
});
