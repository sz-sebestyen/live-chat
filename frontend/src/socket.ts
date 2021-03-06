import io from "socket.io-client";

const backendHost = `${process.env.REACT_APP_BACKEND_HOST}`;

const socket = io(backendHost, {
  withCredentials: true,
});

socket.on("connect", () => {
  console.log("socket connected");
});

export default socket;

