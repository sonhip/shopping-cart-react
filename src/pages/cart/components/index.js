import React from "react";
import ListItems from "./list-items";
import FooterCart from "./footer-cart";
import * as reselect from "../reselect/cart-reselect";
import { useSelector, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import { deleteItemFromCart } from "pages/cart/actions/index";
import { changeQtyItem } from "../actions/index";

function CartPage(props) {
  const dispatch = useDispatch();
  const { dataCart, sumMoney } = useSelector(
    createStructuredSelector({
      dataCart: reselect.dataCartItemsSelector,
      sumMoney: reselect.sumMoneySelector,
      countItem: reselect.countItemsSelector,
    })
  );
  const handleDeleteItem = (id) => {
    dispatch(deleteItemFromCart(id));
  };
  const handleChangeQty = (id, qty) => {
    dispatch(changeQtyItem(id, qty));
  };
  return (
    <div>
      <ListItems
        dataCart={dataCart}
        handleDeleteItem={handleDeleteItem}
        handleChangeQty={handleChangeQty}
      />
      <FooterCart sumMoney={sumMoney} />
    </div>
  );
}

export default React.memo(CartPage);
