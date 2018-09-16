const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 3000 });
wss.on("connection", function(ws) {
  ws.on("message", function(data) {
    console.log(data);
    ws.send("服务器");
  });
});
