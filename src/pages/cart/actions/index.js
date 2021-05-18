import * as types from "./types";

export const addItemToCart = (id) => ({
  type: types.ADD_ITEM_TO_CART,
  id,
});

export const startAddItemToCart = (status) => ({
  type: types.START_ADD_ITEM_TO_CART,
  status,
});
export const stopAddItemToCart = (status) => ({
  type: types.STOP_ADD_ITEM_TO_CART,
  status,
});
export const addItemToCartSuccess = (data) => ({
  type: types.ADD_ITEM_TO_CART_SUCCESS,
  data,
});
export const dddItemToCartFailed = (error) => ({
  type: types.ADD_ITEM_TO_CART_FAILED,
  error,
});

//delete item from cart, not relative to saga, doesn't need to call api
export const deleteItemFromCart = (id) => ({
  type: types.DELETE_ITEM_FROM_CART,
  id,
});

//change qty item
export const changeQtyItem = (id, qty) => ({
  type: types.CHANGE_QTY_ITEM,
  id,
  qty,
});

export const submitToPayment = (data) => ({
  type: types.SUBMIT_TO_PAYMENT,
  data,
});

//confirm order
export const confirmOrder = () => ({
  type: types.CONFIRM_ORDER,
});
