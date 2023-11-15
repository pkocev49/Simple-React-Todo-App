import { Provider } from "react-redux";
import store from "./store";
import { AddTodo } from "./Components/AddTodo/AddTodo";
import { Todos } from "./Components/Todos/Todos";
import "./App.css";
function App() {
  return (
    <>
      <div className="container">
        <Provider store={store}>
          <AddTodo />
          <Todos />
        </Provider>
      </div>
    </>
  );
}

export default App;
