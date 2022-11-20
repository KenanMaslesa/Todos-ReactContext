import { useContext } from "react";
import { Todo } from "../models";
import TodoContext from "../TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  return (
    <>
      <ul className="todo__list">
        {todos.map(({ id, title, completed }: Todo) => (
          <TodoItem id={id} title={title} completed={completed} key={id} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
