import * as actions from "../actions.js";
import * as api from "../api.js";

export const fetchData = () => (dispatch, state) => {
  const xhr = api.fetchData({
    onLoadStart: (event) => dispatch(actions.fetchDataStart({abort: xhr.abort.bind(xhr), event})),
    onLoad:      (event) => dispatch(actions.fetchDataDone({data: event.target.response, event})),
    onProgress:  (event) => dispatch(actions.fetchDataLoading({data: event.target.response, event})),
    onError:     (event) => dispatch(actions.fetchDataFail({error: event.target.response, event})),
    onAbort:     (event) => dispatch(actions.fetchDataAbort({event}))
  });
  xhr.send();
};

export const fetchDataAbort = () => (dispatch, getState) => {
  const { abort } = getState();
  abort();
};
