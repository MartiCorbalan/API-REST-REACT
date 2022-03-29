import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { reduceTodos, todosMiddleware } from "./redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
const reducer = combineReducers({ todos: reduceTodos });

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(todosMiddleware))
);
