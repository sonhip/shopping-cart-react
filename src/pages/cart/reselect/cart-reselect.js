import { createSelector } from "reselect";

const cartSelector = (state) => state.cartReducer;

export const dataCartItemsSelector = createSelector(
  cartSelector,
  (item) => item.cartItems
);
export const sumMoneySelector = createSelector(
  cartSelector,
  (item) => item.sumMoney
);
export const countItemsSelector = createSelector(
  cartSelector,
  (item) => item.countItems
);
export const errorCartSelector = createSelector(
  cartSelector,
  (item) => item.errorCart
);
