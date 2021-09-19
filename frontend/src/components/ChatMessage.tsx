import React, { memo } from "react";
import css from "./chatMessage.module.css";
import { useSelector } from "react-redux";
import type { State, Message, User } from "../store";

function ChatMessage({ id }: { id: string }): JSX.Element {
  const message = useSelector(
    (state: State): Message => state.messages.byId[id]
  );

  const user = useSelector(
    (state: State): User => state.users.byId[message.userId]
  );

  return (
    <div className={css.chatMessage}>
      {user.name}: {message.body}
    </div>
  );
}

export default memo(ChatMessage);
