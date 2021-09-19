import React from "react";
import css from "./chatSendButton.module.css";

function ChatSendButton({ send }: { send: () => void }): JSX.Element {
  return (
    <button
      className={css.chatSendButton}
      onClick={send}
    >
      Send
    </button>
  );
}

export default ChatSendButton;
