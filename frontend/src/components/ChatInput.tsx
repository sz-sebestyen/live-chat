import React from "react";
import css from "./chatInput.module.css";

function ChatInput({
  onKeyDown,
  onChange,
  value,
}: {
  onKeyDown: (input: React.KeyboardEvent<HTMLInputElement>) => void;
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
      onKeyDown={onKeyDown}
    />
  );
}

export default ChatInput;
