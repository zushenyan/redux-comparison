import { call, put, take, select } from "redux-saga/effects";
import { eventChannel, END } from "redux-saga";
import { createAction } from "../utils.js";
import * as actions from "../actions.js";
import * as api from "../api.js";

export const FETCH_DATA_SAGA       = "fetch data saga";
export const FETCH_DATA_ABORT_SAGA = "fetch data abort saga";
export const fetchData             = createAction(FETCH_DATA_SAGA);
export const fetchDataAbort        = createAction(FETCH_DATA_ABORT_SAGA);

export const createFetchDataChannel = () => {
  return eventChannel(emit => {
    const xhr = api.fetchData({
      onLoadStart: (event) => {
        setTimeout(() => {
          emit(actions.fetchDataStart({abort: xhr.abort.bind(xhr), event}));
        }, 0);
      },
      onLoad:      (event) => {
        setTimeout(() => {
          emit(actions.fetchDataDone({data: event.target.response, event}));
          emit(END);
        }, 0);
      },
      onProgress:  (event) => {
        setTimeout(() => {
          emit(actions.fetchDataLoading({data: event.target.response, event}));
        }, 0);
      },
      onError:     (event) => {
        setTimeout(() => {
          emit(actions.fetchDataFail({error: event.target.response, event}));
          emit(END);
        }, 0);
      },
      onAbort:     (event) => {
        setTimeout(() => {
          emit(actions.fetchDataAbort({event}));
          emit(END);
        }, 0);
      }
    });
    xhr.send();
    return () => {};
  });
};

export function * fetchDataSaga() {
  try{
    const channel = yield call(createFetchDataChannel);
    while(true){
      const action = yield take(channel);
      yield put(action);
    }
  }
  catch(e){
    console.log(e);
  }
}

export function * fetchDataAbortSaga() {
  const abort = yield select(state => state.abort);
  abort();
}

export function * watchFetchDataSaga() {
  while(true){
    yield take(FETCH_DATA_SAGA);
    yield call(fetchDataSaga);
  }
}

export function * watchFetchDataAbortSaga() {
  while(true){
    yield take(FETCH_DATA_ABORT_SAGA);
    yield call(fetchDataAbortSaga);
  }
}

export default function * rootSaga(){
  yield [
    watchFetchDataSaga(),
    watchFetchDataAbortSaga()
  ];
}
