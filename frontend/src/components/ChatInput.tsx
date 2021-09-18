import React from "react";
import css from "./chatInput.module.css";

function ChatInput(): JSX.Element {
  return (
    <input name="chatInput" className={css.chatInput}/>
  );
}

export default ChatInput;
