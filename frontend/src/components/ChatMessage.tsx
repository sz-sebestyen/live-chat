import React, { memo } from "react";
import css from "./chatMessage.module.css";
import { useSelector } from "react-redux";
import type { Messages, Message, Users, User } from "../store";

function ChatMessage({ id }: { id: string }): JSX.Element {
  const message = useSelector(
    ({ messages }: { messages: Messages }): Message => messages.byId[id]
  );

  const user = useSelector(
    ({ users }: { users: Users }): User => users.byId[message.userId]
  );

  return (
    <div className={css.chatMessage}>
      {user.name}: {message.body}
    </div>
  );
}

export default memo(ChatMessage);
