const initialState = {
  todoName: "",
  todos: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TODO_NAME":
      return {
        ...state,
        todoName: action.payload,
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
        todoName: "",
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "TOGGLE_TODO_STATUS":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isComplete: !todo.isCompleted,
            };
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};
