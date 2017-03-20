import Rx from "rxjs";
import { combineEpics } from "redux-observable";
import * as actions from "../actions.js";
import * as api from "../api.js";
import { createAction } from "../utils.js";

export const FETCH_DATA_EPIC       = "fetch data epic";
export const FETCH_DATA_ABORT_EPIC = "fetch data abort epic";

export const fetchData      = createAction(FETCH_DATA_EPIC);
export const fetchDataAbort = createAction(FETCH_DATA_ABORT_EPIC);

export const fetchDataEpic = (action$, store) => {
  return action$.ofType(FETCH_DATA_EPIC)
    .mergeMap(action =>
      Rx.Observable.create(observer => {
        const xhr = api.fetchData({
          onLoadStart: (event) => observer.next(actions.fetchDataStart({abort: xhr.abort.bind(xhr), event})),
          onLoad:      (event) => {
            observer.next(actions.fetchDataDone({data: event.target.response, event}))
            observer.complete();
          },
          onProgress:  (event) => observer.next(actions.fetchDataLoading({data: event.target.response, event})),
          error:       (event) => observer.error(actions.fetchDataFail({error: event.target.response, event})),
          onAbort:     (event) => {
            observer.next(actions.fetchDataAbort({event}));
            observer.complete();
          }
        });
        xhr.send();
      })
    );
};

export const fetchDataAbortEpic = (action$, store) => {
  return action$.ofType(FETCH_DATA_ABORT_EPIC)
    .mergeMap(action =>
      Rx.Observable.create(observer => {
        const { abort } = store.getState();
        abort();
        observer.complete();
      })
    );
};

export const rootEpic = combineEpics(
  fetchDataEpic,
  fetchDataAbortEpic
);

export default rootEpic;
