import React, { useRef, useEffect } from "react";
import css from "./chatBody.module.css";
import ChatMessageList from "./ChatMessageList";
import { useSelector } from "react-redux";
import type { Messages } from "../store";

function ChatBody(): JSX.Element {
  const chatBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatBodyRef.current)
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
  });

  const messageIds = useSelector(
    ({ messages }: { messages: Messages }): string[] => messages.ids
  );

  return (
    <div className={css.chatBody} ref={chatBodyRef}>
      <ChatMessageList messageIds={messageIds}/>
    </div>
  );
}

export default ChatBody;
