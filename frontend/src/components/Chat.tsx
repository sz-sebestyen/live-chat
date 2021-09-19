import React, { useEffect } from "react";
import css from "./chat.module.css";
import ChatBody from "./ChatBody";
import ChatControl from "./ChatControl";
import { useDispatch } from "react-redux";
import socket from "../socket";

function Chat(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on("message:in", (payload) => {
      console.log(payload);
      dispatch({ type: "messages/new", payload });
    });
  }, []);

  return (
    <div className={css.chat}>
      <ChatBody />
      <ChatControl />
    </div>
  );
}

export default Chat;
