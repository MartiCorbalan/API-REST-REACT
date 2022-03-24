import { canviarTodo } from "../redux/todosApi";
import { useRef, useState } from "react";
export function TodoItemCompleted({
  todo,
  onTodoUpdate,
  onTodoEdit,
  onDeleteTodo,
}) {
  const tituloAux = useRef();

  const [editar, setEditar] = useState(false);

  return (
    <>
      {todo.completed && (
        <div>
          <div className="llista2">
            <li
              className={todo.completed ? "completed" : "pending"}
              onClick={() =>
                onTodoUpdate({ ...todo, completed: !todo.completed })
              }
            >
              {todo.title}
            </li>

            <button
              className="btn btn-success"
              onClick={() => {
                //postUpdateTodo(todo).then((json) => onTodoUpdate(json));
                setEditar((m) => !m);
              }}
            >
              editar
            </button>
            <button
              className="btn btn-danger"
              onClick={() => onDeleteTodo(todo.id)}
            >
              Borrar
            </button>
          </div>
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
        </div>
      )}
    </>
  );
}
