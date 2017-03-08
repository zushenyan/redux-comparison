import * as actions from "./actions.js";

const INIT_STATE = {
  fetchState: "",
  data:       {},
  error:      {}
};

export const reducer = (state = INIT_STATE, action) => {
  switch(action.type){
    case actions.FETCH_DATA_LOADING:
      return {...state, fetchState: "loading", data: {} };
    case actions.FETCH_DATA_SUCCESS:
      return {...state, fetchState: "success", data: action.payload};
    case actions.FETCH_DATA_FAIL:
      return {...state, fetchState: "fail", error: action.payload };
    default:
      return state;
  }
};
