import React from "react";
import css from "./chatInput.module.css";

function ChatInput({
  storeInput,
  value,
}: {
  storeInput: (input: string) => void;
  value: string;
}): JSX.Element {
  const storeInput2 = (event: any) => {
    storeInput(event?.target?.value);
  };

  return (
    <input
      name="chatInput"
      className={css.chatInput}
      onChange={storeInput2}
      value={value}
    />
  );
}

export default ChatInput;
