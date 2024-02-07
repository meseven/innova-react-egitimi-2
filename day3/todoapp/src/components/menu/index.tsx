import classNames from "classnames";
import { useTodos } from "../../context/TodoContext";

const Menu = () => {
  const { todos_left, clearCompleted, filter, setFilter } = useTodos();

  return (
    <div className="footer">
      <span className="todo-count">
        <strong>{todos_left}</strong> item{todos_left > 1 && "s"} left
      </span>

      <ul className="filters">
        <li>
          <span
            className={classNames({
              selected: filter === "all",
            })}
            onClick={() => setFilter("all")}
          >
            All
          </span>
        </li>
        <li>
          <span
            className={classNames({
              selected: filter === "active",
            })}
            onClick={() => setFilter("active")}
          >
            Active
          </span>
        </li>
        <li>
          <span
            className={classNames({
              selected: filter === "completed",
            })}
            onClick={() => setFilter("completed")}
          >
            Completed
          </span>
        </li>
      </ul>

      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </div>
  );
};

export default Menu;
