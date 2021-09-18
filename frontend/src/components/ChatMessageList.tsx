import React from "react";
import ChatMessage from "./ChatMessage";
import css from "./chatMessageList.module.css";
import { useSelector } from "react-redux";
import type { State } from "../store";

function ChatMessageList(): JSX.Element {
  const messageIds = useSelector(
    (state: State): string[] => state.messages.ids
  );

  return (
    <div className={css.chatMessageList}>
      {messageIds.map((id) => (
        <ChatMessage id={id} key={id} />
      ))}
    </div>
  );
}

export default ChatMessageList;
