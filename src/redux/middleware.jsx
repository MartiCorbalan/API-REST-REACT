import {
  REQUEST_ADD_TODO,
  addTodo,
  REQUEST_TODOS,
  replaceTodos,
  REQUEST_UPDATE_TODO,
  updateTodo,
  REQUEST_DELETE_TODO,
  deleteTodo,
  REQUEST_EDIT_TODO,
} from "./actions";
import {
  getTodos,
  postNewTodo,
  postUpdateTodo,
  eliminarTodo,
} from "./todosApi";

//un middleware son 3 funcions
export const todosMiddleware = (store) => (next) => async (action) => {
  next(action);

  if (action.type === REQUEST_TODOS) {
    const todos = await getTodos();
    store.dispatch(replaceTodos(todos));
  }

  if (action.type === REQUEST_ADD_TODO) {
    const todo = await postNewTodo(action.todo);
    store.dispatch(addTodo(todo));
  }

  if (action.type === REQUEST_UPDATE_TODO) {
    const todo = await postUpdateTodo(action.todo);
    store.dispatch(updateTodo(todo));
  }

  if (action.type === REQUEST_DELETE_TODO) {
    const todo = await eliminarTodo(action.id);
    console.log("return", todo);
    store.dispatch(deleteTodo(todo));
  }
};
