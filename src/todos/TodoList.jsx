import { AfegirTodo } from "./AfegirTodo";
import { TodoItem } from "./TodoItem";
import { TodoItemCompleted } from "./TodoItemCompleted";

export function TodoList({ todos, onTodoUpdate, onDeleteTodo }) {
  console.log("todos", todos);
  return (
    <>
      <div className="allTodo">
        <ul className="llista">
          {/* llista de todos, retorna un li amb el titol de cada todo segons la seva id */}
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onTodoUpdate={onTodoUpdate}
              onDeleteTodo={onDeleteTodo}
            />
          ))}
        </ul>

        <ul className="llista">
          <h2>items completats</h2>
          {/* llista de todos, retorna un li amb el titol de cada todo segons la seva id */}
          {todos.map((todo) => (
            <TodoItemCompleted
              key={todo.id}
              todo={todo}
              onTodoUpdate={onTodoUpdate}
              onDeleteTodo={onDeleteTodo}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
