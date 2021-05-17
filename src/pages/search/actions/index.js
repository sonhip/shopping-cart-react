import * as types from "./types";
export const searchingData = (keyword) => ({
  type: types.SEARCHING_DATA,
  keyword,
});
export const startSearchingData = (loading) => ({
  type: types.START_SEARCHING_DATA,
  loading,
});
export const stopSearchingData = (loading) => ({
  type: types.STOP_SEARCHING_DATA,
  loading,
});
export const searchingDataSuccess = (data) => ({
  type: types.SEARCHING_DATA_SUCCESS,
  data,
});
export const searchingDataFailed = (error) => ({
  type: types.SEARCHING_DATA_FAILED,
  error,
});
