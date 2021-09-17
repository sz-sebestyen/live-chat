const { createServer } = require("http");
const { Server } = require("socket.io");
const Client = require("socket.io-client");

describe("socket.io basics", () => {
  let clientSocket;
  let serverSocket;
  let io;
  let httpServer;

  beforeEach((done) => {
    httpServer = createServer();

    httpServer.listen(() => {
      io = new Server(httpServer);
      const httpServerPort = httpServer.address().port;

      // set up socket server
      io.on("connection", (socket) => {
        serverSocket = socket;
      });

      // set up socket client
      clientSocket = new Client(`http://localhost:${httpServerPort}`);
      clientSocket.on("connect", done);
    });
  });

  afterEach(() => {
    clientSocket.close();
    io.close();
    httpServer.close();
  });

  test("client should receive the right message", (done) => {
    clientSocket.on("hello", (arg) => {
      expect(arg).toBe("world");
      done();
    });

    serverSocket.emit("hello", "world");
  });

  test("server should answer", (done) => {
    serverSocket.on("hi", (cb) => {
      cb("hola");
    });

    clientSocket.emit("hi", (arg) => {
      expect(arg).toBe("hola");
      done();
    });
  });
});

