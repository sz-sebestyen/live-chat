import React from "react";
import "./App.css";
import { createStore } from "redux";
import type { Reducer } from "redux";
import { Provider, connect } from "react-redux";

interface Action {
  type: string,
  payload: string
}

const reducer: Reducer<string[], Action> = function (state: string[] | undefined = ["asd"], action: Action): string[] {
  switch (action.type) {
  case "ADD":
    return [...state, action.payload];
  default:
    return state;
  }
};

const store = createStore(reducer);

const Component = (props: any) => <h1>Helloworld {props.messages[0]}!</h1>;

const mapStateToProps = (state: string[]) => {
  return {
    messages: state
  };
};

const Container = connect(mapStateToProps)(Component);

function App(): JSX.Element {
  return (
    <div className="App">
      <Provider store={store}>
        <Container />
      </Provider>
    </div>
  );
}

export default App;
