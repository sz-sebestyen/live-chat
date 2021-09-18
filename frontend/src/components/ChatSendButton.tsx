import React from "react";
import css from "./chatSendButton.module.css";

function ChatSendButton(): JSX.Element {
  return (
    <button className={css.chatSendButton}>
      Send
    </button>
  );
}

export default ChatSendButton;
