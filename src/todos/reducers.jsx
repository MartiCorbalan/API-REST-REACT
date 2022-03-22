import {
  REPLACE_TODOS,
  UPDATE_TODO,
  ADD_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
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
      return state.filter((title) => title.title === action.todo);

    /*  return state.map(
        (currentTodo) =>
          currentTodo.todo.toLowerCase().includes(action.title.toLowerCase()) //canvia el que te la mateixa id
      );
 */
    /* if (action.title === "") {
        return state;
      } else {
        return {
          state: state.filter((title) => title(action.todo)),
        };
      } */
    case DELETE_TODO:
      return state.filter((item) => item.id !== action.id);

    default:
      return state;
  }
}
