import { useEffect } from "react";
import { AfegirTodo } from "./AfegirTodo";
import {
  requestAddTodo,
  requestUpdateTodo,
  requestTodos,
  editTodo,
  toggleTodo,
} from "./actions";
import { TodoList } from "./TodoList";
import { useDispatch, useSelector } from "react-redux";
import { selectTodos } from "./selectors";

export function Todos() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  useEffect(() => {
    const intervalID = setInterval(() => loadTodos(), 2000);
    return () => clearInterval(intervalID);
  }, []);

  const loadTodos = () => dispatch(requestTodos());

  const onAddTodo = (todo) => dispatch(requestAddTodo(todo));

  const onTodoUpdate = (todo) => dispatch(requestUpdateTodo(todo));

  const onEditTodo = (todo) => dispatch(editTodo(todo));

  const onToggleTodo = (todo) => dispatch(toggleTodo(todo));

  return (
    <div className="App">
      <h1>API-REST</h1>
      {/* la funcion getTodos nos da la promesa actualizada de la lista de setTodos ? */}
      <button onClick={loadTodos}>Refresh</button>
      <input
        type="text"
        placeholder="Search task"
        onChange={(e) => onToggleTodo(e.target.value)}
      ></input>
      <TodoList
        todos={todos}
        onTodoUpdate={onTodoUpdate}
        onEditTodo={onEditTodo}
        onToggleTodo={onToggleTodo}
      />
      <AfegirTodo onAddTodo={onAddTodo} />
    </div>
  );
}
