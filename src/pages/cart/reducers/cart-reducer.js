import * as types from "../actions/types";

const initialState = {
  loadingCart: false,
  dataCart: [],
  errorCart: null,
  totalMoney: 0,
  countItems: 0,
  isSubmit: [],
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.START_ADD_ITEM_TO_CART:
      return { ...state, loadingCart: action.loading };
    case types.STOP_ADD_ITEM_TO_CART:
      return { ...state, loadingCart: action.loading };
    case types.ADD_ITEM_TO_CART_SUCCESS:
      const infoPd = action.data;

      // empty cart
      if (!state.dataCart) {
        infoPd.qty = 1; // add a field qty default is 1
        return {
          ...state,
          dataCart: [...state.dataCart, infoPd],
          isSubmit: [...state.isSubmit, infoPd],
          errorCart: null,
          totalMoney: parseInt(state.totalMoney) + parseInt(infoPd.price),
          countItems: state.countItems + 1,
        };
      } else {
        // item was added in cart, just change qty
        const idPd = action.data.id;
        const searchPd = state.dataCart.filter((item) => item.id === idPd)[0];
        if (searchPd) {
          searchPd.qty += 1;
          return {
            ...state,
            errorCart: null,
            totalMoney: parseInt(state.totalMoney) + parseInt(infoPd.price),
          };
        } else {
          infoPd.qty = 1; // item was added in cart, just change qty
          return {
            ...state,
            dataCart: [...state.dataCart, infoPd],
            isSubmit: [...state.isSubmit, infoPd],
            errorCart: null,
            totalMoney: parseInt(state.totalMoney) + parseInt(infoPd.price),
            countItems: state.countItems + 1,
          };
        }
      }
    case types.ADD_ITEM_TO_CART_FAILED:
      return {
        ...state,
        errorCart: action.error,
      };
    case types.CHANGE_QTY_ITEM:
      const idCart = action.id;
      let qtyCart = action.qty;
      qtyCart = qtyCart === null || qtyCart === "" ? 1 : qtyCart;

      // update qty cart
      const newListCart = state.dataCart.map((item) => {
        return item.id === idCart ? { ...item, qty: qtyCart } : item;
      });
      const newSubmitCart = state.isSubmit.map((item) => {
        return item.id === idCart ? { ...item, qty: qtyCart } : item;
      });
      //update total money and calculate
      const newTotalMoney = newListCart
        .map((item) => parseInt(item.price) * parseInt(item.qty))
        .reduce((pre, next) => pre + next);

      return {
        ...state,
        errorCart: null,
        dataCart: newListCart,
        totalMoney: newTotalMoney,
        isSubmit: newSubmitCart,
      };
    case types.DELETE_ITEM_FROM_CART:
      const idItemDel = action.id;
      const delItem = state.dataCart.filter((item) => item.id === idItemDel)[0];
      const newsItems = state.dataCart.filter((item) => item.id !== idItemDel);
      const newsTotalMoney =
        state.totalMoney - parseInt(delItem.price) * delItem.qty;
      return {
        ...state,
        dataCart: newsItems,
        isSubmit: state.isSubmit.filter((item) => item.id !== idItemDel),
        totalMoney: newsTotalMoney,
        errorCart: null,
        countItems: state.countItems - 1,
      };
    case types.SUBMIT_TO_PAYMENT:
      const itemSubmit = action.data;
      const itemsSubmit = state.isSubmit.filter(
        (item) => item.id === itemSubmit.id
      )[0];
      return {
        ...state,
        isSubmit: itemsSubmit
          ? state.isSubmit.filter((item) => item.id !== itemSubmit.id)
          : [...state.isSubmit, itemSubmit],
      };

    case types.CONFIRM_ORDER:
      const newCartData = state.dataCart.filter((item) => {
        for (let i = 0; i < state.isSubmit.length; i++) {
          if (item.id === state.isSubmit[i].id) {
            return false;
          }
        }
        return true;
      });
      return {
        ...state,
        dataCart: newCartData,
        countItems: newCartData.length,
        isSubmit: [],
      };
    default:
      return state;
  }
};
export default CartReducer;
