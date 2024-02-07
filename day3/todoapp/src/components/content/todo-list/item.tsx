import classNames from "classnames";
import { TodoType, useTodos } from "../../../context/TodoContext";

type IProps = {
  todo: TodoType;
};

const Item = ({ todo }: IProps) => {
  const { toggleTodo, deleteTodo } = useTodos();

  return (
    <li
      className={classNames({
        completed: todo.is_completed,
      })}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.is_completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <label>{todo.title}</label>
        <button
          className="destroy"
          onClick={() => deleteTodo(todo.id)}
        ></button>
      </div>
    </li>
  );
};

export default Item;
