import React, { useEffect, useReducer, useState } from "react";
import { AfegirTodo } from "./AfegirTodo";
import { replaceTodos, addTodo, updateTodo } from "./actions";
import { TodoList } from "./TodoList";
import { getTodos } from "./todosApi";
import { initialState, reduceTodos } from "./reducers";

//mostrar tots els todos

export function Todos() {
  const [todos, dispatch] = useReducer(reduceTodos, initialState);

  useEffect(() => {
    loadTodos();
    const intervalID = setInterval(() => loadTodos(), 60000);
    return () => clearInterval(intervalID);
  }, []);

  const loadTodos = () =>
    getTodos().then((allTodos) => dispatch(replaceTodos(allTodos)));
  const onTodoAdded = (todo) => dispatch(addTodo(todo));
  const onTodoUpdated = (updatedTodo) => {
    console.log("holaaaa");
    dispatch(updateTodo(updatedTodo));
  };

  return (
    <div className="App">
      <h1>API-REST</h1>
      {/* la funcion getTodos nos da la promesa actualizada de la lista de setTodos ? */}
      <button onClick={loadTodos}>Refresh</button>
      <TodoList
        todos={todos}
        //manipulem l'estat
        onUpdated={onTodoUpdated}
      />
      <AfegirTodo onTodoAdded={onTodoAdded} />
    </div>
  );
}
