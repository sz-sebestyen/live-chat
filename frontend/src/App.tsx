import React from "react";
import css from "./app.module.css";
import Chat from "./components/Chat";
import { createStore } from "redux";
import type { Reducer } from "redux";
import { Provider, useSelector } from "react-redux";

interface Action {
  type: string,
  payload: string
}

const reducer: Reducer<string[], Action> = function (
  state: string[] | undefined = ["asd"],
  action: Action = { type: "", payload: ""}
): string[] {
  switch (action.type) {
  case "messages/push":
    return [...state, action.payload];
  case "messages/clear":
    return [];
  default:
    return state;
  }
};

const store = createStore(reducer);

const Component = () => {
  const messages = useSelector((state: string[]): string[] => {
    return state;
  });

  return<h1>Helloworld {messages[0]}!</h1>;
};


function App(): JSX.Element {
  return (
    <div className={css.app}>
      <Provider store={store}>
        <Component />
        <Chat />
      </Provider>
    </div>
  );
}

export default App;
