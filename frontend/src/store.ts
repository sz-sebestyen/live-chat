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

interface Action<T> {
  type: string;
  payload: T;
}

export type Normalized<T> = {
  byId: {
    [key: string]: T;
  };
  ids: string[];
};

export type Messages = Normalized<Message>;
export type Users = Normalized<User>;

const defaultUser = { id: "1", name: "alpha" };

const defaultMessage: Message = {
  id: "123",
  body: "asd asd asd asd asd asd asd asd asd asd asd asd asd asd ",
  userId: "1",
};

const defaultNormalizedUsers: Users = {
  byId: {
    1: defaultUser,
  },
  ids: ["1"],
};

const defaultNormalizedMessages: Messages = {
  byId: {
    123: defaultMessage,
    124: defaultMessage,
  },
  ids: [
    "123",
    "124",
    "124",
    "124",
    "124",
    "124",
    "124",
    "124",
    "124",
    "124",
    "124",
    "124",
    "124",
    "124",
    "124",
    "124",
    "124",
    "124",
    "124",
  ],
};

const users: Reducer<Users, Action<User>> = function (
  state: Users | undefined = defaultNormalizedUsers,
  action: Action<User> = { type: "", payload: defaultUser }
): Users {
  switch (action.type) {
  case "users/push": {
    const byId = {
      ...state.byId,
      [action.payload.id]: action.payload,
    };

    const ids = Object.keys(byId);

    return { byId, ids };
  }
  case "users/clear":
    return defaultNormalizedUsers;
  default:
    return state;
  }
};

const messages: Reducer<Messages, Action<Message>> = function (
  state: Messages | undefined = defaultNormalizedMessages,
  action: Action<Message> = { type: "", payload: defaultMessage }
): Messages {
  switch (action.type) {
  case "messages/push": {
    const byId = {
      ...state.byId,
      [action.payload.id]: action.payload,
    };

    const ids = Object.keys(byId);

    return { byId, ids };
  }
  case "messages/clear":
    return defaultNormalizedMessages;
  default:
    return state;
  }
};

const reducer = combineReducers({ messages, users });

const store = createStore(reducer);

export default store;
