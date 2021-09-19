import React from "react";
import css from "./chatInput.module.css";

function ChatInput({
  onChange,
  value,
}: {
  onChange: (input: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}): JSX.Element {
  return (
    <input
      name="chatInput"
      className={css.chatInput}
      onChange={onChange}
      value={value}
      autoComplete="off"
    />
  );
}

export default ChatInput;
