const http = require("http");
const express = require("express");
require("express-async-errors");
const { Server } = require("socket.io");
const cors = require("cors");
const { errorHandler } = require("./middlewares");

const app = express();

app.use(cors({ credentials: true, origin: process.env.FRONTEND_HOST }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/test", (req, res) => {
  res.send("test passed");
});

app.use(errorHandler);

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_HOST,
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  socket.on("message:out", (arg) => {
    io.emit("message:in", arg);
  });
});

module.exports = server;
