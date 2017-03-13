import { createStore, applyMiddleware } from "redux";
import createsSagaMiddleware from "redux-saga";
import createLogger from "redux-logger";

import rootSaga from "./sagas.js"
import reducer from "../reducer.js";

const saga = createsSagaMiddleware();

const store = createStore(
  reducer,
  undefined,
  applyMiddleware(
    saga,
    createLogger()
  )
);

saga.run(rootSaga);

export default store;
