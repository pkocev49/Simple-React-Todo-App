import { legacy_createStore as createStore, combineReducers } from "redux";
import { todoReducer } from "./reducers/todoReducer/TodoReducer";
const rootReduces = combineReducers({ todoReducer });

const store = createStore(rootReduces);
export default store;
