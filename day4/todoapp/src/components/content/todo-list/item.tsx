import classNames from "classnames";
import useTodoStore, { TodoType } from "../../../store/TodoStore";

type IProps = {
  todo: TodoType;
};

const Item = ({ todo }: IProps) => {
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);

  return (
    <li
      className={classNames({
        completed: todo.is_completed,
      })}
    >
      <div className="view">
        <input
          data-cy="toggle"
          className="toggle"
          type="checkbox"
          checked={todo.is_completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <label>{todo.title}</label>
        <button
          data-cy="delete"
          className="destroy"
          onClick={() => deleteTodo(todo.id)}
        ></button>
      </div>
    </li>
  );
};

export default Item;
