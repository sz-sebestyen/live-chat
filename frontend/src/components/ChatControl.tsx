import React, { useEffect } from "react";
import css from "./chatControl.module.css";
import ChatInput from "./ChatInput";
import ChatSendButton from "./ChatSendButton";
import socket from "../socket";

function ChatControl(): JSX.Element {

  useEffect(() => {
    socket.emit("message:out", "Joined");
  }, []);

  return (
    <div className={css.chatControl}>
      <ChatInput />
      <ChatSendButton />
    </div>
  );
}

export default ChatControl;
