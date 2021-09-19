import React from "react";
import ChatMessage from "./ChatMessage";
import css from "./chatMessageList.module.css";

function ChatMessageList({ messageIds }: { messageIds: string[] }): JSX.Element {
  return (
    <div className={css.chatMessageList}>
      {messageIds.map((id) => (
        <ChatMessage id={id} key={id} />
      ))}
    </div>
  );
}

export default ChatMessageList;
