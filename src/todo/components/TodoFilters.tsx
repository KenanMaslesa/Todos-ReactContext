import { useContext } from "react";
import { Todo } from "../models";
import TodoContext from "../TodoContext";

const TodoFilters = () => {
  const { todos, clearCompletedTodos } = useContext(TodoContext);

  return (
    <div className="todo__filters">
      <span>
        {todos.filter((todo: Todo) => !todo.completed).length} items left
      </span>

      {/* <ul>
        <li>All</li>
        <li>Active</li>
        <li>Completed</li>
      </ul> */}

      <button onClick={() => clearCompletedTodos()}>Clear completed</button>
    </div>
  );
};

export default TodoFilters;
