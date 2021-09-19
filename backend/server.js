const http = require("http");
const express = require("express");
require("express-async-errors");
const { Server } = require("socket.io");
const cors = require("cors");
const { uuid } = require("uuidv4");
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
  socket.data.userId = uuid();

  socket.on("message:out", (payload) => {
    // payload
    // message: {
    //   id: "1234",
    //   body: message,
    //   userId: "4321",
    // },
    // user: {
    //   name: "xd",
    //   id: "4321",
    // }
    payload.user.id = socket.data.userId;
    payload.message.id = uuid();
    payload.message.userId = socket.data.userId;

    io.emit("message:in", payload);
  });
});

module.exports = server;
