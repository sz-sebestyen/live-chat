import React from "react";
import css from "./app.module.css";
import Chat from "./components/Chat";
import { createStore } from "redux";
import type { Reducer } from "redux";
import { Provider, useSelector } from "react-redux";

interface Message {
  id: string;
  body: string;
}

interface Action {
  type: string;
  payload: Message;
}

interface State {
  messages: {
    byId: {
      [key: string]: string;
    },
    ids: string[];
  }
}

const defaultState = {
  messages: {
    byId: {
      123: "asd",
    },
    ids: ["123"],
  }
};

const defaultMessage = {
  id: "123",
  body: "asd",
};

const reducer: Reducer<State, Action> = function (
  state: State | undefined = defaultState,
  action: Action = { type: "", payload: defaultMessage }
): State {
  switch (action.type) {
  case "messages/push":
    return {
      ...state,
      messages: {
        byId: {
          ...state.messages.byId,
          [action.payload.id]: action.payload.body,
        },
        ids: [...state.messages.ids, action.payload.id]
      }
    };
  case "messages/clear":
    return defaultState;
  default:
    return state;
  }
};

const store = createStore(reducer);

const Component = () => {
  const message = useSelector((state: State): string => {
    return state.messages.byId["123"];
  });

  return<h1>Helloworld {message}!</h1>;
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
