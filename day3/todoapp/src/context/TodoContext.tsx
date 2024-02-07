import { createContext, useContext, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export type TodoType = {
  id: string;
  title: string;
  is_completed: boolean;
};

type FilterType = "all" | "active" | "completed";

const defaultTodos: TodoType[] = [
  {
    id: "1",
    title: "JavaScript Öğren",
    is_completed: false,
  },
  {
    id: "2",
    title: "React Öğren",
    is_completed: false,
  },
  {
    id: "3",
    title: "React Eğitimi Al",
    is_completed: true,
  },
];

type TodoContextType = {
  todos: TodoType[];
  filtered_todos: TodoType[];
  todos_left: number;
  filter: FilterType;
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  addTodo: (title: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  clearCompleted: () => void;
  setFilter: (filter: FilterType) => void;
};

const TodoContext = createContext<TodoContextType>({} as TodoContextType);

type IPros = {
  children: React.ReactElement;
};

export const TodoContextProvider = ({ children }: IPros) => {
  const [todos, setTodos] = useState(defaultTodos);
  const [filter, setFilter] = useState<FilterType>("all");

  const addTodo = (title: string) => {
    setTodos((prev) => [{ id: uuidv4(), title, is_completed: false }, ...prev]);
  };

  const toggleTodo = (id: string) => {
    const cloned = [...todos];

    const index = cloned.findIndex((todo) => todo.id === id);
    cloned[index].is_completed = !cloned[index].is_completed;

    setTodos(cloned);
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.is_completed));
  };

  const filtered_todos = useMemo(() => {
    return filter === "all"
      ? todos
      : todos.filter(
          (todo) => todo.is_completed === (filter === "active" ? false : true)
        );
  }, [filter, todos]);

  const todos_left = useMemo(() => {
    return todos.filter((todo) => !todo.is_completed).length;
  }, [todos]);

  const values = {
    todos,
    todos_left,
    filter,
    filtered_todos,
    setFilter,
    setTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export const useTodos = () => {
  const context = useContext(TodoContext);

  if (context === undefined) {
    throw new Error("useTodos hook must be call inside TodoContextProvider");
  }

  return context;
};
