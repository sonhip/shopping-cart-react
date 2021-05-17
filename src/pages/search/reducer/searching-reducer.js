import * as types from "../actions/types";
const initialState = {
  loading: false,
  data: [],
  error: null,
};
const searchingReducer = (state = initialState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case types.START_SEARCHING_DATA:
      newState.loading = action.loading;
      newState.error = null;
      break;
    case types.STOP_SEARCHING_DATA:
      newState.loading = action.loading;
      newState.error = null;
      break;
    case types.SEARCHING_DATA_SUCCESS:
      newState.data = action.data;
      newState.error = null;
      break;
    case types.SEARCHING_DATA_FAILED:
      newState.error = action.error;
      newState.data = [];
      break;
    default:
      break;
  }
  return newState;
};
export default searchingReducer;
