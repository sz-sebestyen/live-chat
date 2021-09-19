import React from "react";
import css from "./chatInput.module.css";

function ChatInput({
  storeInput,
  value,
}: {
  storeInput: (input: string) => void;
  value: string;
}): JSX.Element {
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    storeInput(event.target.value);

  return (
    <input
      name="chatInput"
      className={css.chatInput}
      onChange={changeHandler}
      value={value}
    />
  );
}

export default ChatInput;
