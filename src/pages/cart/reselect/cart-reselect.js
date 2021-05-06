import { createSelector } from "reselect";

const cartSelector = (state) => state.cartReducer;

export const dataCartItemsSelector = createSelector(
  cartSelector,
  (item) => item.dataCart
);
export const sumMoneySelector = createSelector(
  cartSelector,
  (item) => item.totalMoney
);
export const countItemsSelector = createSelector(
  cartSelector,
  (item) => item.countItems
);
export const errorCartSelector = createSelector(
  cartSelector,
  (item) => item.errorCart
);
