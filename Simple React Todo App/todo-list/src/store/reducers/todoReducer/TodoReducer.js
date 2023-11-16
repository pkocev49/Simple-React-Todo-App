const initialState = {
  todoName: "",
  todos: JSON.parse(localStorage.getItem("todos")) || [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TODO_NAME":
      return {
        ...state,
        todoName: action.payload,
      };
    case "ADD_TODO":
      const newTodos = [...state.todos, action.payload];
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return {
        ...state,
        todos: newTodos,
        todoName: "",
      };
    case "DELETE_TODO":
      const updatedTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return {
        ...state,
        todos: updatedTodos,
      };
    case "TOGGLE_TODO_STATUS":
      const toggledTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isComplete: !todo.isComplete,
          };
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(toggledTodos));
      return {
        ...state,
        todos: toggledTodos,
      };
    default:
      return state;
  }
};
