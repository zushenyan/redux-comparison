import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../actions.js";
import * as api from "../api.js";

// export function * fetchData(){
//   const xhr = api.fetchData({
//     onLoadStart: (e) => dispatch(actions.fetchDataStart({xhr})),
//     onLoad:      (e) => dispatch(actions.fetchDataDone({data: e.target.response, xhr})),
//     onProgress:  (e) => dispatch(actions.fetchDataLoading({data: e.target.response, xhr})),
//     onError:     (e) => dispatch(actions.fetchDataFail({error: e.target.response, xhr})),
//     onAbort:     (e) => dispatch(actions.fetchDataAbort({xhr}))
//   });
//   xhr.send();
// }

export const FETCH_DATA = "fetch data";

export const fetchData = actions.createAction(FETCH_DATA);

export function * fetchDataSaga(){
  yield put(actions.fetchDataStart("kkk"));
}

export function * watchFetchData(){
  yield takeLatest(FETCH_DATA, fetchDataSaga);
}

export default function * rootSaga(){
  yield [
    watchFetchData()
  ];
}
