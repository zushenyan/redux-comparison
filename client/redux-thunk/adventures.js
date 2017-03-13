import * as actions from "../actions.js";
import * as api from "../api.js";

export const fetchData = () => (dispatch, state) => {
  const xhr = api.fetchData({
    onLoadStart: (e) => dispatch(actions.fetchDataStart({xhr})),
    onLoad:      (e) => dispatch(actions.fetchDataDone({data: e.target.response, xhr})),
    onProgress:  (e) => dispatch(actions.fetchDataLoading({data: e.target.response, xhr})),
    onError:     (e) => dispatch(actions.fetchDataFail({error: e.target.response, xhr})),
    onAbort:     (e) => dispatch(actions.fetchDataAbort({xhr}))
  });
  xhr.send();
};

export const fetchDataAbort = () => (dispatch, getState) => {
  const { xhr } = getState();
  xhr && xhr.abort();
};
