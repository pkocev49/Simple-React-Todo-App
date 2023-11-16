import { Provider } from "react-redux";
import store from "./store";
import Fade from "react-reveal";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Components/Home/Home";
import { Todo } from "./Components/Todos/Todo";
import { AddTodo } from "./Components/AddTodo/AddTodo";
function App() {
  return (
    <>
      <Navigation />
      <Home />
      <Provider store={store}>
        <div
          id="todo's"
          className="w-full h-screen bg-aboutMeBG flex flex-col 
        justify-center items-center text-white"
        >
          <Fade top>
            <h1 className="text-white font-bold border-b-[2px]  text-2xl mb-[30px] sm:text-3xl">
              Create your Todo's for the day
            </h1>
          </Fade>
          <Fade left>
            <AddTodo />

            <Todo />
          </Fade>
        </div>
      </Provider>
    </>
  );
}

export default App;
