import React from "react";
import css from "./chat.module.css";
import ChatBody from "./ChatBody";
import ChatControl from "./ChatControl";

function Chat(): JSX.Element {
  return (
    <div className={css.chat}>
      <ChatBody />
      <ChatControl />
    </div>
  );
}

export default Chat;
