import classNames from "classnames";
import useTodoStore from "../../store/TodoStore";

const Menu = () => {
  const todos = useTodoStore((state) => state.todos);
  const filter = useTodoStore((state) => state.filter);
  const setFilter = useTodoStore((state) => state.setFilter);
  const clearCompleted = useTodoStore((state) => state.clearCompleted);

  const todos_left = todos.filter((todo) => !todo.is_completed).length;

  return (
    <div className="footer">
      <span className="todo-count" data-cy="items-left">
        <strong>{todos_left}</strong> item
        {todos_left > 1 && "s"} left
      </span>

      <ul className="filters">
        <li>
          <span
            data-cy="filter-all"
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
            data-cy="filter-active"
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
            data-cy="filter-completed"
            className={classNames({
              selected: filter === "completed",
            })}
            onClick={() => setFilter("completed")}
          >
            Completed
          </span>
        </li>
      </ul>

      <button
        data-cy="clear-completed"
        className="clear-completed"
        onClick={clearCompleted}
      >
        Clear completed
      </button>
    </div>
  );
};

export default Menu;
