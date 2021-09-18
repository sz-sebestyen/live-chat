import React from "react";
import css from "./chatMessage.module.css";

function ChatMessage({ id }: { id: string }): JSX.Element {

  const message = id;

  return (
    <div className={css.chatMessage}>
      {message}
    </div>
  );
}

export default ChatMessage;
