import React from "react";
import { Todos } from "./todos/Todos";
import { requestTodos } from "./redux";
import { store } from "./store";
import { Provider } from "react-redux";

store.dispatch(requestTodos());

export default function App() {
  //funcio del index
  return (
    <Provider store={store}>
      <Todos />
    </Provider>
  );
}
