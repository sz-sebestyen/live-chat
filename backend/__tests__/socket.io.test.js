const { createServer } = require("http");
const { Server } = require("socket.io");
const Client = require("socket.io-client");

describe("socket.io basics", () => {
  let io, serverSocket, clientSocket;

  beforeAll((done) => {
    const httpServer = createServer();
    
    httpServer.listen(() => {
      // set up socket server
      io = new Server(httpServer);
      io.on("connection", (socket) => {
        serverSocket = socket;
      });
      
      // set up socket client
      const port = httpServer.address().port;
      clientSocket = new Client(`http://localhost:${port}`);
      clientSocket.on("connect", done);
    });
  });

  afterAll(() => {
    io.close();
    clientSocket.close();
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