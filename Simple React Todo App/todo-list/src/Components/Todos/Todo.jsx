import { useSelector, useDispatch } from "react-redux";
import Fade from "react-reveal";

export const Todo = () => {
  const todos = useSelector((state) => state.todoReducer.todos);
  const dispatch = useDispatch();
  const handleDeleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };
  const toggleTodoStatus = (id) => {
    dispatch({ type: "TOGGLE_TODO_STATUS", payload: id });
  };
  const completedTodos = todos.filter((todo) => todo.isComplete).length;
  return (
    <div className="w-[300px] md:w-[400px]">
      <div className="mb-[20px]">
        <p className="font-bold text-2xl ">Todo's:{todos.length}</p>
        <p className="font-bold text-2xl">Completed Todo's:{completedTodos}</p>
      </div>

      {todos.length ? (
        <div className="h-[400px] overflow-y-auto">
          {todos.map((todo, index) => (
            <Fade top>
              <div
                key={todo.id}
                className="mb-[30px] mt-[20px]   p-[10px] shadow-[rgba(0,_0,_0,_0.2)_0px_40px_40px_-7px]"
              >
                <h3>
                  {index + 1}. Todo: {todo.title}
                </h3>
                <div className="space-x-2">
                  <input
                    className="check"
                    type="checkbox"
                    checked={todo.isComplete}
                    onChange={() => toggleTodoStatus(todo.id)}
                  />
                  <label>{todo.isComplete ? "Complete" : "Incomplete"}</label>
                  <button
                    className=" p-[2px] h-full rounded-[5px] bg-brightRed  h-[30px] "
                    onClick={() => handleDeleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      ) : (
        <div>No todos yet</div>
      )}
    </div>
  );
};
