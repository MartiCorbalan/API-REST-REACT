import { getByPlaceholderText } from "@testing-library/react";
import { useRef } from "react";
import { postNewTodo } from "./todosApi";

export function BuscarTodo({ onToggleTodo }) {
  const titleRef = useRef();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const title = titleRef.current.value;
        console.log(title);
        titleRef.current.value = "";

        onToggleTodo(title);
      }}
    >
      <input ref={titleRef} placeholder="escriu" />
      <button
        type="submit"
        onClick={() => {
          /* if (titleRef.current.value === "") {
            alert("escriu ");
          } else {
            titleRef.current.value = "";
          } */
        }}
      >
        Buscar
      </button>
    </form>
  );
}
