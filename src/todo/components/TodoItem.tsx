import { useContext } from "react";
import { Todo } from "../models";
import TodoContext from "../TodoContext";

const TodoItem = ({ id, title, completed }: Todo) => {
  const { updateTodo, deleteTodo } = useContext(TodoContext);

  return (
    <li className="todo__item">
      <input
        type="checkbox"
        defaultChecked={completed}
        onChange={() => updateTodo(id)}
      />
      <label>{title}</label>
      <button
        onClick={() => {
          deleteTodo(id);
        }}
      >
        x
      </button>
    </li>
  );
};

export default TodoItem;
