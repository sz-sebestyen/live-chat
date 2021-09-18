import React from "react";
import css from "./chatBody.module.css";
import ChatMessageList from "./ChatMessageList";

function ChatBody(): JSX.Element {
  return (
    <div className={css.chatBody}>
      <ChatMessageList />
    </div>
  );
}

export default ChatBody;
