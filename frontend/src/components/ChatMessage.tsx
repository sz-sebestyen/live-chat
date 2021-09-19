import React, { memo } from "react";
import css from "./chatMessage.module.css";
import { useSelector } from "react-redux";
import type { Messages, Message, Users, User } from "../store";

function ChatMessage({ id }: { id: string }): JSX.Element {
  const message = useSelector(
    ({ messages }: { messages: Messages }): Message => messages.byId[id]
  );

  console.log(message);
  
  const user = useSelector(
    ({ users }: { users: Users }): User => users.byId[message.userId]
  );

  console.log(user);
  
  const asd = useSelector(
    (hm: any): User => hm
  );

  console.log(asd);

  return (
    <div className={css.chatMessage}>
      <span className={css.userName}>{user.name}</span>
      <span className={css.messageBody}>{": "}{message.body}</span>
    </div>
  );
}

export default memo(ChatMessage);
