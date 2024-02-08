import Item from "./item";
import useTodoStore from "../../../store/TodoStore";
import { useMemo } from "react";

const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);
  const filter = useTodoStore((state) => state.filter);

  const filtered_todos = useMemo(() => {
    return filter === "all"
      ? todos
      : todos.filter(
          (todo) => todo.is_completed === (filter === "active" ? false : true)
        );
  }, [filter, todos]);

  return (
    <ul className="todo-list">
      {filtered_todos.map((todo) => (
        <Item key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
