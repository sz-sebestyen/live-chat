import React, { useState, useEffect } from "react";
import css from "./chatControl.module.css";
import ChatInput from "./ChatInput";
import ChatSendButton from "./ChatSendButton";
import socket from "../socket";

function ChatControl(): JSX.Element {
  const [message, setMesage] = useState("");
  const [shouldSend, setShouldSend] = useState(false);

  const storeInput = (event: React.ChangeEvent<HTMLInputElement>) =>
    setMesage(event.target.value);

  const sendMessage = () => {
    socket.emit("message:out", {
      id: "1234",
      body: message,
      userId: "4321",
    });
  };

  const send = () => setShouldSend(true);

  useEffect(() => {
    if (message && shouldSend) {
      sendMessage();
      setMesage("");
      setShouldSend(false);
    } else if (!message && shouldSend) {
      setShouldSend(false);
    }
  }, [message, shouldSend]);

  return (
    <div className={css.chatControl}>
      <ChatInput onChange={storeInput} value={message} />
      <ChatSendButton send={send} />
    </div>
  );
}

export default ChatControl;
