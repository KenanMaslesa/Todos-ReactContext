import { createContext, useState } from "react";
import { Todo } from "./models";

export type TodosContextState = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  deleteTodo: (todoId: number) => void;
  updateTodo: (todoId: number) => void;
  clearCompletedTodos: () => void;
};

const contextDefaultValues: TodosContextState = {
  todos: [],
  addTodo: () => {},
  deleteTodo: () => {},
  updateTodo: () => {},
  clearCompletedTodos: () => {},
};

const TodoContext = createContext<TodosContextState>(contextDefaultValues);

export function TodoProvider({ children }: any) {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: "Learn Redux Context", completed: true },
    { id: 2, title: "Style app", completed: false },
  ]);

  const addTodo = (todo: Todo): void => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  const updateTodo = (todoId: number): void => {
    const newTodos = [...todos];
    newTodos.forEach((item) => {
      if (item.id === todoId) {
        item.completed = !item.completed;
      }
    });
    setTodos(newTodos);
  };

  const deleteTodo = (id: number): void => {
    const newTodos = [...todos];
    setTodos(newTodos.filter((todo) => todo.id !== id));
  };

  const clearCompletedTodos = () => {
    const newTodos = [...todos];
    const uncompletedTodos = newTodos.filter((todo) => !todo.completed);
    setTodos(uncompletedTodos);
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, deleteTodo, updateTodo, clearCompletedTodos }}
    >
      {children}
    </TodoContext.Provider>
  );
}
export default TodoContext;
