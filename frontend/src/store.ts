import { createStore, combineReducers } from "redux";
import type { Reducer } from "redux";

export type Message = {
  id: string;
  body: string;
  userId: string;
};

export type User = {
  id: string;
  name: string;
};

interface Action {
  type: string;
  payload: Message;
}

export type Normalized<T> = {
  byId: {
    [key: string]: T;
  },
  ids: string[];
}

export type State = {
  messages: Normalized<Message>,
  users: Normalized<User>,
}

const defaultUser = { id: "1", name: "alpha" };

const defaultMessage: Message = {
  id: "123",
  body: "asd",
  userId: "1",
};

const defaultState: State = {
  messages: {
    byId: {
      123: defaultMessage,
    },
    ids: ["123"],
  },
  users: {
    byId: {
      1: defaultUser,
    },
    ids: ["1"],
  },
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
          [action.payload.id]: action.payload,
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