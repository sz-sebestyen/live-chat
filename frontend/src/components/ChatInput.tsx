import React from "react";
import css from "./chatInput.module.css";

function ChatInput(): JSX.Element {
  return (
    <div>
      <input name="chatInput" className={css.chatInput}/>
    </div>
  );
}

export default ChatInput;
