import React, { useState, useEffect } from "react";
import css from "./chatControl.module.css";
import ChatInput from "./ChatInput";
import ChatSendButton from "./ChatSendButton";
import socket from "../socket";

function ChatControl(): JSX.Element {
  const [message, setMesage] = useState("");
  const [shouldSend, setShouldSend] = useState(false);
  const [username, setUsername] = useState("");

  const getUsername = async () => {
    const res = await fetch("https://randomuser.me/api/?results=1");
    const { results } = await res.json();
    setUsername(results[0].login.username);
  };

  useEffect(() => {
    getUsername();
  }, []);

  const storeInput = (event: React.ChangeEvent<HTMLInputElement>) =>
    setMesage(event.target.value);

  const sendMessage = () => {
    socket.emit("message:out", {
      message: {
        body: message,
      },
      user: {
        name: username,
      }
    });
  };

  const send = () => setShouldSend(true);

  const sendIfEnter = (event: React.KeyboardEvent<HTMLInputElement>) => 
    event.key === "Enter" && send();

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
      {username && (
        <>
          <ChatInput onChange={storeInput} value={message} onKeyDown={sendIfEnter} placeholder={username}/>
          <ChatSendButton send={send} />
        </>
      )}
    </div>
  );
}

export default ChatControl;
