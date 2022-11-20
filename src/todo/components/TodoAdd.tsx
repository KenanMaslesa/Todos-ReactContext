import { useContext, useState } from "react";
import TodoContext from "../TodoContext";

const TodoAdd = () => {
  const [enteredText, setEnteredText] = useState("");
  const { addTodo } = useContext(TodoContext);

  const addTodoItem = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter") {
      addTodo({ id: Date.now(), title: enteredText, completed: false });
      setEnteredText("");
    }
  };

  return (
    <input
      className="todo__new"
      type="text"
      value={enteredText}
      placeholder="What needs to be done?"
      onKeyDown={addTodoItem}
      onChange={(e) => setEnteredText(e.target.value)}
    />
  );
};

export default TodoAdd;
