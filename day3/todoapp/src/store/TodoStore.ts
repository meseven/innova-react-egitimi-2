import { create } from "zustand";
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
    title: "Unit test Öğren",
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

type Store = {
  todos: TodoType[];
  filter: FilterType;
  addTodo: (title: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  clearCompleted: () => void;
  setFilter: (filter: FilterType) => void;
};

const useTodoStore = create<Store>()((set) => ({
  todos: defaultTodos,
  filter: "all",
  setFilter: (filter) => set({ filter }),
  addTodo: (title) =>
    set((state) => ({
      todos: [{ id: uuidv4(), title, is_completed: false }, ...state.todos],
    })),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, is_completed: !todo.is_completed } : todo
      ),
    })),
  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  clearCompleted: () =>
    set((state) => ({
      todos: state.todos.filter((todo) => !todo.is_completed),
    })),
}));

export default useTodoStore;
