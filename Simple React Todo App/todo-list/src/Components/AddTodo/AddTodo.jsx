import { useDispatch, useSelector } from "react-redux";
import "./AddTodo.css";
export const AddTodo = () => {
  const dispatch = useDispatch();
  const todoName = useSelector((state) => state.todoReducer.todoName);
  const handleChangeTodoName = (event) => {
    dispatch({ type: "SET_TODO_NAME", payload: event.target.value });
  };

  const handleAddTodo = () => {
    const todo = {
      id: Date.now(),
      title: todoName,
      isComplete: false,
    };
    dispatch({ type: "ADD_TODO", payload: todo });
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };
  return (
    <div className="add-todo">
      <input
        className="add-todo-inp"
        type="text"
        onChange={handleChangeTodoName}
        value={todoName}
        placeholder="Add Todo"
        onKeyPress={handleKeyPress}
      />

      <button className="addTodoBtn" onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
};
