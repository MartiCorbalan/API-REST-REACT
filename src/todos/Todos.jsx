import { useEffect } from "react";

import { AfegirTodo } from "./AfegirTodo";
import { BuscarTodo } from "./BuscarTodo";
import { useRef, useState } from "react";
import {
  requestAddTodo,
  requestUpdateTodo,
  requestTodos,
  editTodo,
  searchTodo,
  requestDeleteTodo,
} from "../redux/actions";
import { TodoList } from "./TodoList";
import { useDispatch, useSelector } from "react-redux";
import { selectTodos } from "../redux/selectors";

export function Todos() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  useEffect(() => {
    const intervalID = setInterval(() => loadTodos(), 60000);

    return () => clearInterval(intervalID);
  }, []);

  const loadTodos = () => dispatch(requestTodos());

  const onAddTodo = (todo) => dispatch(requestAddTodo(todo));

  const onTodoUpdate = (todo) => dispatch(requestUpdateTodo(todo));

  const onEditTodo = (todo) => dispatch(editTodo(todo));

  const onToggleTodo = (todo) => dispatch(searchTodo(todo));

  const onDeleteTodo = (id) => {
    console.log("hola3", id);
    dispatch(requestDeleteTodo(id));
  };

  return (
    <div className="allPage">
      <div className="header">
        <h1>API-REST</h1>
      </div>

      {/* la funcion getTodos nos da la promesa actualizada de la lista de setTodos ? */}

      <div className="item">
        <button className="btn btn-warning" onClick={loadTodos}>
          Refresh
        </button>
        <BuscarTodo onToggleTodo={onToggleTodo} />
        <TodoList
          todos={todos}
          onTodoUpdate={onTodoUpdate}
          onEditTodo={onEditTodo}
          onDeleteTodo={onDeleteTodo}
        />
        <div className="add">
          <AfegirTodo onAddTodo={onAddTodo} />
        </div>
      </div>
      <br />
      <footer>
        <h3>Created by Martí Corbalan</h3>
      </footer>
    </div>
  );
}
