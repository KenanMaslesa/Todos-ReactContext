import React, { useEffect } from "react";
import TodoAdd from "./todo/components/TodoAdd";
import TodoFilters from "./todo/components/TodoFilters";
import TodoList from "./todo/components/TodoList";
import { TodoProvider } from "./todo/TodoContext";

const App = () => {
  useEffect(() => {
    document.title = "React Todos Context";
  }, []);

  return (
    <TodoProvider>
      <h1 className="title">Todos Context</h1>
      <section className="todo-section">
        <TodoAdd />
        <TodoList />
        <TodoFilters />
      </section>
    </TodoProvider>
  );
};

export default App;
