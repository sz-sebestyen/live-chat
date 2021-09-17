const { createServer } = require("http");
const { Server } = require("socket.io");
const Client = require("socket.io-client");

const httpServer = createServer();
const io = new Server(httpServer);

let serverSocket;
let httpServerPort;

beforeAll((done) => {
  httpServer.listen(() => {
    httpServerPort = httpServer.address().port;

    // set up socket server
    io.on("connection", (socket) => {
      serverSocket = socket;
    });

    done();
  });
});

afterAll(() => {
  io.close();
  httpServer.close();
});


describe("socket.io basics", () => {
  let clientSocket;

  beforeEach((done) => {
    // set up socket client
    clientSocket = new Client(`http://localhost:${httpServerPort}`);
    clientSocket.on("connect", done);
  });

  afterEach(() => {
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