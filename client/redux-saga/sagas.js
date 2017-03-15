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
      onLoadStart: (e) => emit(actions.fetchDataStart({xhr})),
      onLoad:      (e) => {
        emit(actions.fetchDataDone({data: e.target.response, xhr}));
        emit(END);
      },
      onProgress:  (e) => emit(actions.fetchDataLoading({data: e.target.response, xhr})),
      onError:     (e) => {
        emit(actions.fetchDataFail({error: e.target.response, xhr}));
        emit(END);
      },
      onAbort:     (e) => {
        setTimeout(() => {
          emit(actions.fetchDataAbort({xhr}));
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
  const xhr = yield select(state => state.xhr);
  xhr && xhr.abort();
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
