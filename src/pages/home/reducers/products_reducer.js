import * as types from "../actions/types";

const initialState = {
  loadingProducts: false,
  errorProducts: null,
  dataProducts: [],
};

export const productsReducer = (state = initialState, action) => {
  const cloneState = JSON.parse(JSON.stringify(state)); //deep copy object
  switch (action.type) {
    case types.START_GET_DATA:
      cloneState.loadingProducts = action.loading;
      break;
    case types.STOP_GET_DATA:
      cloneState.loadingProducts = action.loading;
      break;
    case types.GET_DATA_SUCCESS:
      cloneState.dataProducts = action.products;
      cloneState.errorProducts = null;
      break;
    case types.GET_DATA_FAILURE:
      cloneState.errorProducts = action.error;
      cloneState.dataProducts = [];
      break;
    default:
      break;
  }
  return cloneState;
};

export default productsReducer;
