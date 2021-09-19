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
  payload: {
    message: Message,
    user: User,
  };
}

export type Normalized<T> = {
  byId: {
    [key: string]: T;
  };
  ids: string[];
};

export type Messages = Normalized<Message>;
export type Users = Normalized<User>;

const defaultUser: User = { id: "", name: "" };

const defaultMessage: Message = {
  id: "",
  body: "",
  userId: "",
};

const defaultPayload = {
  message: defaultMessage,
  user: defaultUser,
};

const defaultNormalized = {
  byId: {},
  ids: [],
};

const users: Reducer<Users, Action> = function (
  state: Users | undefined = defaultNormalized,
  action: Action = { type: "", payload: defaultPayload }
): Users {
  switch (action.type) {
  case "messages/new": {
    const byId = {
      ...state.byId,
      [action.payload.user.id]: action.payload.user,
    };

    const ids = Object.keys(byId);

    return { byId, ids };
  }
  case "users/clear":
    return defaultNormalized;
  default:
    return state;
  }
};

const messages: Reducer<Messages, Action> = function (
  state: Messages | undefined = defaultNormalized,
  action: Action = { type: "", payload: defaultPayload }
): Messages {
  switch (action.type) {
  case "messages/new": {
    const byId = {
      ...state.byId,
      [action.payload.message.id]: action.payload.message,
    };

    const ids = Object.keys(byId);

    return { byId, ids };
  }
  case "messages/clear":
    return defaultNormalized;
  default:
    return state;
  }
};

const reducer = combineReducers({ messages, users });

const store = createStore(reducer);

export default store;
