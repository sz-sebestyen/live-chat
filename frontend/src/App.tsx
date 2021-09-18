import React from "react";
import css from "./app.module.css";
import Chat from "./components/Chat";
import { Provider } from "react-redux";
import store from "./store";

function App(): JSX.Element {
  return (
    <div className={css.app}>
      <Provider store={store}>
        <Chat />
      </Provider>
    </div>
  );
}

export default App;
