import React, { memo } from "react";
import css from "./chatMessage.module.css";
import { useSelector } from "react-redux";
import type { State } from "../store";

function ChatMessage({ id }: { id: string }): JSX.Element {
  const message = useSelector(
    (state: State): string => state.messages.byId[id]
  );

  return (
    <div className={css.chatMessage}>
      {message}
    </div>
  );
}

export default memo(ChatMessage);
