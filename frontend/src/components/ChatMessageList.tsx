import React from "react";
import ChatMessage from "./ChatMessage";
import css from "./chatMessageList.module.css";

function ChatMessageList(): JSX.Element {
  const messageIds: string[] = ["message101"];

  return (
    <div className={css.chatMessageList}>
      {messageIds.map((id) => 
        <ChatMessage id={id} key={id}/>
      )}
    </div>
  );
}

export default ChatMessageList;
