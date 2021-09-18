import { createStore } from "redux";
import type { Reducer } from "redux";

interface Message {
  id: string;
  body: string;
}

interface Action {
  type: string;
  payload: Message;
}

export interface State {
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
      321: "dsa",
    },
    ids: ["123", "321"],
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

export default store;