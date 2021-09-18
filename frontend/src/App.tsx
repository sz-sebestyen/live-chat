import React from "react";
import "./App.css";
import { createStore } from "redux";
import type { Reducer } from "redux";
import { Provider, useSelector } from "react-redux";

interface Action {
  type: string,
  payload: string
}

const reducer: Reducer<string[], Action> = function (state: string[] | undefined = ["asd"], action: Action): string[] {
  switch (action.type) {
  case "messages/push":
    return [...state, action.payload];
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
    <div className="App">
      <Provider store={store}>
        <Component />
      </Provider>
    </div>
  );
}

export default App;
