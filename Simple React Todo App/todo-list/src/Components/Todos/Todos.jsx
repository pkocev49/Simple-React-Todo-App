import { useSelector, useDispatch } from "react-redux";
import "./Todos.css";
export const Todos = () => {
  const todos = useSelector((state) => state.todoReducer.todos);
  const dispatch = useDispatch();
  const handleDeletTodo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };
  const toggleTodoStatus = (id) => {
    dispatch({ type: "TOGGLE_TODO_STATUS", payload: id });
  };
  const completedTodos = todos.filter((todo) => todo.isComplete).length;
  return (
    <div className="dv">
      <div className="completed">
        <p>Todos:{todos.length}</p>
        <p>Completed Todos:{completedTodos}</p>
      </div>
      <h2>Todos list:</h2>

      {todos.length ? (
        <div>
          {todos.map((todo) => (
            <div key={todo.id} className="todo-div">
              <h3>Todo title: {todo.title}</h3>
              <div>
                <input
                  className="check"
                  type="checkbox"
                  checked={todo.isComplete}
                  onChange={() => toggleTodoStatus(todo.id)}
                />
                <label>{todo.isComplete ? "Complete" : "Incomplete"}</label>
                <button onClick={() => handleDeletTodo(todo.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>No todos yet</div>
      )}
    </div>
  );
};
