import * as types from "../actions/types";

const initialState = {
  statusAdd: false,
  cartItems: [],
  sumMoney: 0,
  countItems: 0,
  errorCart: null,
};

export const CartReducer = (state = initialState, action) => {
  const cloneState = JSON.parse(JSON.stringify(state)); //deep copy object
  switch (action.type) {
    case types.START_ADD_ITEM_TO_CART:
      cloneState.statusAdd = action.status;
      break;
    case types.STOP_ADD_ITEM_TO_CART:
      cloneState.statusAdd = action.status;
      break;
    case types.ADD_ITEM_TO_CART_FAILED:
      cloneState.errorCart = action.error;
      break;
    case types.ADD_ITEM_TO_CART_SUCCESS:
      const detailItem = action.data;
      // empty cart
      if (!cloneState.cartItems) {
        detailItem.qty = 1; // add a field quantity for item
        cloneState.cartItems = [...cloneState.cartItems, detailItem]; //detailItem;
        cloneState.error = null;
        cloneState.countItems += 1;
        cloneState.sumMoney =
          cloneState.sumMoney +
          parseFloat(detailItem.price) * parseFloat(detailItem.qty);
      } else {
        // item was added in cart => add + 1 qty
        const IdItem = detailItem.id;
        const infoItem = cloneState.cartItems.filter(
          (item) => item.id === IdItem
        )[0];
        if (infoItem) {
          infoItem.qty += 1;
          cloneState.errorCart = null;
          cloneState.sumMoney =
            cloneState.sumMoney + parseFloat(infoItem.price);
        } else {
          // add new item and new qty
          detailItem.qty = 1; // add a field quantity for item
          cloneState.cartItems = [...cloneState.cartItems, detailItem];
          cloneState.error = null;
          cloneState.countItems += 1;
          cloneState.sumMoney =
            cloneState.sumMoney +
            parseFloat(detailItem.price) * parseFloat(detailItem.qty);
        }
      }
      break;
    case types.DELETE_ITEM_FROM_CART:
      const idItemDelete = action.id;
      const itemDelete = cloneState.cartItems.filter(
        (item) => item.id === idItemDelete
      )[0];
      cloneState.cartItems = cloneState.cartItems.filter(
        (item) => item.id !== idItemDelete
      );

      cloneState.countItems -= 1;
      cloneState.error = null;
      cloneState.sumMoney =
        cloneState.sumMoney - parseFloat(itemDelete.price * itemDelete.qty);

      break;
    case types.CHANGE_QTY_ITEM:
      const idChange = action.id;
      const qtyChange = action.qty;

      const itemChange = cloneState.cartItems.filter(
        (item) => item.id === idChange
      )[0];
      itemChange.qty = qtyChange;
      const totalMoney = cloneState.cartItems
        .map((item) => parseFloat(item.qty * item.price))
        .reduce((a, b) => a + b);
      cloneState.sumMoney = totalMoney;
      cloneState.error = null;
      break;
    default:
      break;
  }
  return cloneState;
};
export default CartReducer;
