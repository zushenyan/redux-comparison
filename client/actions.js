export const createAction = (type) => (payload) => ({ type, payload });

export const FETCH_DATA_LOADING = "fetch data loading";
export const FETCH_DATA_SUCCESS = "fetch data success";
export const FETCH_DATA_FAIL    = "fetch data fail";

export const fetchDataLoading = createAction(FETCH_DATA_LOADING);
export const fetchDataSuccess = createAction(FETCH_DATA_SUCCESS);
export const fetchDataFail    = createAction(FETCH_DATA_FAIL);
