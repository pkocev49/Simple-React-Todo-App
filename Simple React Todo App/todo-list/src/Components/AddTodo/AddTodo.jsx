import { useDispatch, useSelector } from "react-redux";

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
    <div className=" space-x-2  sm:space-x-3 p-5 mb-[20px]">
      <input
        className="w-[230px] bg-transparent border-[1px] rounded-[5px] p-[5px]"
        type="text"
        onChange={handleChangeTodoName}
        value={todoName}
        placeholder="Add Todo"
        onKeyPress={handleKeyPress}
      />

      <button
        className=" p-[4px] rounded-[5px] bg-btnColor "
        onClick={handleAddTodo}
      >
        Add Todo
      </button>
    </div>
  );
};
