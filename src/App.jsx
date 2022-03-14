import React, { useEffect, useState, useRef } from "react";

function AfegirTodo() {
  const titleRef = useRef();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const title = titleRef.current.value;
        console.log(title);
        titleRef.current.value = "";
        //enviar utilitzant el fetch
        fetch("https://tc-todo-2022.herokuapp.com/todos", {
          method: "POST",
          body: JSON.stringify({
            title: "Fer un post",
            completed: false,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((json) => console.log(json));
      }}
    >
      <input ref={titleRef} />
      <input type="submit" value="Afegir" />
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    /* fetch("https://jsonplaceholder.typicode.com/todos") */
    fetch("https://tc-todo-2022.herokuapp.com/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  });
  return (
    <div className="App">
      <h1>API-REST</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <AfegirTodo />
    </div>
  );
}

export default App;
