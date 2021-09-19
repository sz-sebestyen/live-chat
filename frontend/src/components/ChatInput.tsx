import React from "react";
import css from "./chatInput.module.css";

function ChatInput({
  onKeyDown,
  onChange,
  value,
  placeholder
}: {
  onKeyDown: (input: React.KeyboardEvent<HTMLInputElement>) => void,
  onChange: (input: React.ChangeEvent<HTMLInputElement>) => void,
  value: string,
  placeholder: string;
}): JSX.Element {
  return (
    <input
      name="chatInput"
      className={css.chatInput}
      onChange={onChange}
      value={value}
      autoComplete="off"
      onKeyDown={onKeyDown}
      placeholder={placeholder}
    />
  );
}

export default ChatInput;
