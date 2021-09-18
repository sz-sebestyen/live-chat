import React from "react";
import css from "./chatControl.module.css";
import ChatInput from "./ChatInput";
import ChatSendButton from "./ChatSendButton";

function ChatControl(): JSX.Element {
  return (
    <div className={css.chatControl}>
      <ChatInput />
      <ChatSendButton />
    </div>
  );
}

export default ChatControl;
