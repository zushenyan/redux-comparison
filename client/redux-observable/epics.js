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
          onLoadStart: (e) => observer.next(actions.fetchDataStart({xhr})),
          onLoad:      (e) => {
            observer.next(actions.fetchDataDone({data: e.target.response, xhr}))
            observer.complete();
          },
          onProgress:  (e) => observer.next(actions.fetchDataLoading({data: e.target.response, xhr})),
          error:       (e) => observer.error(actions.fetchDataFail({error: e.target.response, xhr})),
          onAbort:     (e) => {
            observer.next(actions.fetchDataAbort({xhr}));
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
        const { xhr } = store.getState();
        xhr && xhr.abort();
        observer.complete();
      })
    );
};

export const rootEpic = combineEpics(
  fetchDataEpic,
  fetchDataAbortEpic
);

export default rootEpic;
