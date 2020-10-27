import { createStore, combineReducers } from "redux";

//create root reducer
const reducer = combineReducers({});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
