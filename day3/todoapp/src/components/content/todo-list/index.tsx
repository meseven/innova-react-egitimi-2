import Item from "./item";
import { useTodos } from "../../../context/TodoContext";

const TodoList = () => {
  const { filtered_todos } = useTodos();

  return (
    <ul className="todo-list">
      {filtered_todos.map((todo) => (
        <Item key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
