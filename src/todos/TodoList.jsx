import { TodoItem } from "./TodoItem";

export function TodoList({ todos, onTodoUpdate }) {
  console.log("todos", todos);
  return (
    <ul>
      {/* llista de todos, retorna un li amb el titol de cada todo segons la seva id */}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onTodoUpdate={onTodoUpdate}
          //onDeleteTodo={onDeleteTodo}
        />
      ))}
    </ul>
  );
}
