const http = require("http");
const express = require("express");
require("express-async-errors");
const { Server } = require("socket.io");
const { errorHandler } = require("./middlewares");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  socket.on("message:out", (arg) => {
    socket.broadcast.emit("message:in", arg);
  });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/test", (req, res) => {
  res.send("test passed");
});

app.use(errorHandler);

module.exports = server;
