import * as types from "../actions/type";

const initialState = {
  isLoading: null,
  error: {},
  data: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.START_LOGIN:
      return { ...state, isLoading: action.loading };
    case types.STOP_LOGIN:
      return { ...state, isLoading: action.loading };
    case types.LOGIN_FAILED:
      return { ...state, error: action.error };
    case types.LOGIN_SUCCESS:
      return { ...state, error: {}, data: action.data };
    case types.START_LOGOUT:
      return { ...state, isLoading: action.loading };
    case types.STOP_LOGOUT:
      return { ...state, isLoading: action.loading };
    case types.LOGOUT_FAILED:
      return { ...state, error: action.error };
    case types.LOGOUT_SUCCESS:
      return { ...state, error: {}, data: null, isLoading: null };
    case types.START_REGISTER:
      return { ...state, isLoading: action.loading };
    case types.STOP_REGISTER:
      return { ...state, isLoading: action.loading };
    case types.REGISTER_FAILED:
      return { ...state, error: action.error };
    case types.REGISTER_SUCCESS:
      return { ...state, error: {}, data: action.data };
    default:
      return state;
  }
};

export default loginReducer;
