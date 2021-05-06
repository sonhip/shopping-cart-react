import * as types from "./type";

export const loginRequest = (user, pass) => ({
  type: types.LOGIN_REQUEST,
  user,
  pass,
});

export const loginSuccess = (data) => ({
  type: types.LOGIN_SUCCESS,
  data,
});

export const loginFailed = (error) => ({
  type: types.LOGIN_FAILED,
  error,
});

export const startLogin = (loading) => ({
  type: types.START_LOGIN,
  loading,
});
export const stopLogin = (loading) => ({
  type: types.STOP_LOGIN,
  loading,
});

//==========================================================
export const logoutRequest = () => ({
  type: types.LOGOUT_REQUEST,
});

export const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});

export const logoutFailed = (error) => ({
  type: types.LOGOUT_FAILED,
  error,
});

export const startLogout = (loading) => ({
  type: types.START_LOGOUT,
  loading,
});
export const stopLogout = (loading) => ({
  type: types.STOP_LOGOUT,
  loading,
});
//==========================================================
export const registerRequest = (user, email, pass, phone) => ({
  type: types.REGISTER_REQUEST,
  user,
  email,
  pass,
  phone,
});
export const registerSuccess = (data) => ({
  type: types.REGISTER_SUCCESS,
  data,
});

export const registerFailed = (error) => ({
  type: types.REGISTER_FAILED,
  error,
});

export const stopRegister = (loading) => ({
  type: types.STOP_REGISTER,
  loading,
});
export const startRegister = (loading) => ({
  type: types.START_REGISTER,
  loading,
});
