import { TodoItem } from "./TodoItem";

export function TodoList({ todos, onTodoUpdate }) {
  console.log("todos", todos);
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onTodoUpdate={onTodoUpdate} />
      ))}
    </ul>
  );
}
