const { createServer } = require("http");
const { Server } = require("socket.io");
const Client = require("socket.io-client");

describe("socket.io with two clients", () => {
  let clientSockets;
  let io;
  let httpServer;

  beforeEach((done) => {
    httpServer = createServer();

    httpServer.listen(() => {
      io = new Server(httpServer);
      const httpServerPort = httpServer.address().port;

      // set up first socket client
      clientSockets = Array.from({ length: 2 }).map(
        () => new Client(`http://localhost:${httpServerPort}`)
      );

      const connections = clientSockets.map(
        (clientSocket) => new Promise((res) => clientSocket.on("connect", res))
      );

      Promise.all(connections).then(() => done());
    });
  });

  afterEach(() => {
    clientSockets.forEach((clientSocket) => clientSocket.close());
    io.close();
    httpServer.close();
  });

  test("server should broadcast to both clients", (done) => {
    const promises = clientSockets.map(
      (clientSocket) =>
        new Promise((res) => {
          clientSocket.on("hello", (arg) => {
            res(arg);
          });
        })
    );

    io.emit("hello", "world");

    Promise.all(promises).then((messages) => {
      expect(messages).toEqual(["world", "world"]);
      done();
    });
  });
});
