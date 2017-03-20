import _ from "lodash";
import * as actions from "./actions.js";

const INIT_STATE = {
  fetchState: "start",
  data:       {},
  error:      {},
  abort:      () => {},
  event:      {}
};

const reducer = (state = INIT_STATE, action) => {
  // for unknown reason it won't clone while in object merging,
  // so I have to clone here.
  const clonedAction = _.cloneDeep(action);
  switch(action.type){
    case actions.FETCH_DATA_START:
      return {
        ...INIT_STATE,
        abort: clonedAction.payload.abort,
        event: clonedAction.payload.event
      };
    case actions.FETCH_DATA_LOADING:
      return {
        ...state,
        fetchState: "loading",
        data:       clonedAction.payload.data,
        event:      clonedAction.payload.event
      };
    case actions.FETCH_DATA_DONE:
      return {
        ...state,
        fetchState: "done",
        data:       clonedAction.payload.data,
        event:      clonedAction.payload.event
      };
    case actions.FETCH_DATA_FAIL:
      return {
        ...state,
        fetchState: "fail",
        error:      clonedAction.payload.error,
        event:      clonedAction.payload.event
      };
    case actions.FETCH_DATA_ABORT:
      return {
        ...state,
        fetchState: "abort",
        event:      clonedAction.payload.event
      };
    default:
      return state;
  }
};

export default reducer;
