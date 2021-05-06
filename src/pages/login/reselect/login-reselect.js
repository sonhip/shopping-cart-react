import { createSelector } from "reselect";

const loginSelector = (state) => state.login;

export const getLoadingLoginSelector = createSelector(
  loginSelector,
  (item) => item.isLoading
);
export const getMessageErrorSelector = createSelector(
  loginSelector,
  (item) => item.error
);

export const getDataLoginSelector = createSelector(
  loginSelector,
  (item) => item.data
);
