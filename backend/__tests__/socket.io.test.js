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

  test("client should receive the right message", async () => {
    const message = new Promise((res) =>
      clientSocket.on("hello", (arg) => res(arg))
    );

    serverSocket.emit("hello", "world");

    expect(await message).toBe("world");
  });

  test("server should answer", async () => {
    serverSocket.on("hi", (cb) => cb("hola"));

    const answer = new Promise((res) =>
      clientSocket.emit("hi", (arg) => res(arg))
    );

    expect(await answer).toBe("hola");
  });
});
