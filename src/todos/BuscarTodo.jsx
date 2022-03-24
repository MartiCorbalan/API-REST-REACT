import { useRef } from "react";

export function BuscarTodo({ onToggleTodo }) {
  const titleRef = useRef();
  return (
    <div className="buscar">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const title = titleRef.current.value;
          console.log(title);
          titleRef.current.value = "";

          onToggleTodo(title);
        }}
      >
        <input ref={titleRef} placeholder="Search" />
        <button
          //className="btn btn-primary"
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
    </div>
  );
}
