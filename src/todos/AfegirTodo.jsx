import { useRef } from "react";
import { postNewTodo } from "./todosApi";

export function AfegirTodo({ onAddTodo }) {
  const titleRef = useRef();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const title = titleRef.current.value;
        console.log(title);
        titleRef.current.value = ""; //borrar value despues de coger el primero
        //enviar utilitzant el fetch

        onAddTodo({ title });
        //passem el title a la funcio de crear nou item
        //i ens retorna el json
        //postNewTodo(title).then((json) => onTodoAdded(json));
      }}
    >
      <input ref={titleRef} />
      <input type="submit" value="Afegir" />
    </form>
  );
}
