const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

app.get("/", (req, res) => {
  res.end("Server is working on 3000 PORT.");
});

let onlineCount = 0;

io.on("connection", (socket) => {
  console.log("a user connected");

  onlineCount++;

  io.emit("online-count", onlineCount);

  socket.on("new-message", (message) => {
    console.log("new message received", message);

    socket.broadcast.emit("new-message", message);
  });

  socket.on("disconnect", () => {
    console.log("a user disconnected");

    onlineCount--;
    socket.broadcast.emit("online-count", onlineCount);
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
