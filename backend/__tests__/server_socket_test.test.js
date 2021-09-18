const Client = require("socket.io-client");
const server = require("../server");

let clientSocket1, clientSocket2;

beforeAll(async () => {
  await new Promise((resolve) => server.listen(resolve));
  const httpServerPort = server.address().port;

  clientSocket1 = new Client(`http://localhost:${httpServerPort}`);
  clientSocket2 = new Client(`http://localhost:${httpServerPort}`);

  await new Promise((res) => clientSocket1.on("connect", res));
  await new Promise((res) => clientSocket2.on("connect", res));
});

afterAll(() => {
  clientSocket1.close();
  clientSocket2.close();
  server.close();
});

test("client1 should send message to client2", async () => {
  const promise = new Promise((res) =>
    clientSocket2.on("message:in", (arg) => res(arg))
  );

  clientSocket1.emit("message:out", "hi");
  const message = await promise;

  expect(message).toBe("hi");
});
