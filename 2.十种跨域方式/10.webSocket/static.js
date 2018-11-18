const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 3000 });
wss.on("connection", function(ws) {
  ws.on("message", function(data) {
    console.log(data);
    ws.send("服务器");
  });
});

// const io = require("socket.io");
// const app = require("http").createServer();

// app.on("request", (req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   console.log("success");
// });
// app.listen(4000, () => {
//   console.log("已经连接4000");
// });

// io.listen(app).on("connetion", client => {
//   console.log(1);
//   client.on("message", data => {
//     client.send(data);
//   });
//   client.on("disconnect", () => {
//     console.log("服务已经断开");
//   });
// });
