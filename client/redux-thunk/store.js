import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createLogger from "redux-logger";

import reducer from "./reducer.js";

const store = createStore(
  reducer,
  undefined,
  applyMiddleware(
    thunk,
    createLogger()
  )
);

export default store;
