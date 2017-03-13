export const createAction = (type) => (payload) => ({ type, payload });

export const FETCH_DATA_START   = "fetch data start";
export const FETCH_DATA_LOADING = "fetch data loading";
export const FETCH_DATA_DONE    = "fetch data done";
export const FETCH_DATA_FAIL    = "fetch data fail";
export const FETCH_DATA_ABORT   = "fetch data abort";

export const fetchDataStart   = createAction(FETCH_DATA_START);
export const fetchDataLoading = createAction(FETCH_DATA_LOADING);
export const fetchDataDone    = createAction(FETCH_DATA_DONE);
export const fetchDataFail    = createAction(FETCH_DATA_FAIL);
export const fetchDataAbort   = createAction(FETCH_DATA_ABORT);
