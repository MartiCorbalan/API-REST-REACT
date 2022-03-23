import { postUpdateTodo, canviarTodo } from "./todosApi";
import { useRef, useState } from "react";
export function TodoItem({ todo, onTodoUpdate, onTodoEdit, onDeleteTodo }) {
  const tituloAux = useRef();

  const [editar, setEditar] = useState(false);

  return (
    <>
      <li
        className={todo.completed ? "completed" : "pending"}
        onClick={() => onTodoUpdate({ ...todo, completed: !todo.completed })}
      >
        {todo.title}
      </li>

      <button
        onClick={() => {
          //postUpdateTodo(todo).then((json) => onTodoUpdate(json));
          setEditar((m) => !m);
        }}
      >
        editar
      </button>
      <button onClick={() => onDeleteTodo(todo.id)}>Borrar</button>

      {editar && (
        <form
          onSubmit={(e) => {
            e.preventDefault();

            const titulo = tituloAux.current.value;
            todo.title = titulo;

            canviarTodo(todo).then((json) => onTodoEdit(json));
            tituloAux.current.value = "";
            setEditar(false);
          }}
        >
          <input
            ref={tituloAux}
            placeholder="escriu per canviar"
            /*  className={editar ? "editOn" : "editOff"} */
          ></input>
        </form>
      )}
    </>
  );
}
