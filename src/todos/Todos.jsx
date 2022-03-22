import { useEffect } from "react";
import { useRef } from "react";
import { AfegirTodo } from "./AfegirTodo";
import { BuscarTodo } from "./BuscarTodo";
import {
  requestAddTodo,
  requestUpdateTodo,
  requestTodos,
  editTodo,
  searchTodo,
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

  const onToggleTodo = (todo) => dispatch(searchTodo(todo));

  //const onDeleteTodo = (id) => dispatch(deleteTodo(id));
  const titleRef = useRef();
  return (
    <div className="App">
      <h1>API-REST</h1>
      {/* la funcion getTodos nos da la promesa actualizada de la lista de setTodos ? */}
      <button onClick={loadTodos}>Refresh</button>
      <BuscarTodo onToggleTodo={onToggleTodo} />
      <TodoList
        todos={todos}
        onTodoUpdate={onTodoUpdate}
        onEditTodo={onEditTodo}
        //onDeleteTodo={onDeleteTodo}
      />
      <AfegirTodo onAddTodo={onAddTodo} />
    </div>
  );
}
