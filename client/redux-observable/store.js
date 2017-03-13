import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import createLogger from "redux-logger";

import rootEpic from "./epics.js";
import reducer from "../reducer.js";

const store = createStore(
  reducer,
  undefined,
  applyMiddleware(
    createEpicMiddleware(rootEpic),
    createLogger()
  )
);

export default store;
