import * as actions from "./actions.js";

const INIT_STATE = {
  fetchState: "",
  data:       {},
  error:      {},
  xhr:        null
};

const reducer = (state = INIT_STATE, action) => {
  switch(action.type){
    case actions.FETCH_DATA_START:
      return {
        ...INIT_STATE,
        xhr:        action.payload.xhr
      };
    case actions.FETCH_DATA_LOADING:
      return {
        ...state,
        fetchState: "loading",
        data:       action.payload.data,
        xhr:        action.payload.xhr
      };
    case actions.FETCH_DATA_DONE:
      return {
        ...state,
        fetchState: "done",
        data:       action.payload.data,
        xhr:        action.payload.xhr
      };
    case actions.FETCH_DATA_FAIL:
      return {
        ...state,
        fetchState: "fail",
        error:      action.payload.error,
        xhr:        action.payload.xhr
      };
    case actions.FETCH_DATA_ABORT:
      return {
        ...state,
        fetchState: "abort",
        xhr:        action.payload.xhr
      };
    default:
      return state;
  }
};

export default reducer;
