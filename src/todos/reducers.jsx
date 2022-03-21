import {
  REPLACE_TODOS,
  UPDATE_TODO,
  ADD_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
} from "./actions";

export const initialState = [];
export function reduceTodos(state = initialState, action) {
  switch (action.type) {
    case REPLACE_TODOS:
      return action.todos;
    case ADD_TODO:
      return [...state, action.todo];

    case UPDATE_TODO:
      return state.map(
        (currentTodo) =>
          currentTodo.id === action.todo.id ? action.todo : currentTodo //canvia el que te la mateixa id
      );

    case EDIT_TODO:
      return state.map(
        (currentTodo) =>
          currentTodo.todo === action.todo ? action.todo : currentTodo //canvia el que te la mateixa id
      );

    case TOGGLE_TODO:
      /*  return state.map(
        (currentTodo) =>
          currentTodo.todo.toLowerCase().includes(action.title.toLowerCase()) //canvia el que te la mateixa id
      );
 */
      if (action.title === "") {
        return [...state, action.todo];
      } else {
        return (currentTodo) =>
          currentTodo.todo.toLowerCase().includes(action.todo.toLowerCase());
      }

    default:
      return state;
  }
}
