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
  const { dataCart, isSubmit } = useSelector(
    createStructuredSelector({
      dataCart: reselect.dataCartItemsSelector,
      isSubmit: reselect.isSubmitSelector,
    })
  );
  const totalMoney = isSubmit.reduce((a, b) => a + b.price * b.qty, 0);
  const handleDeleteItem = (id) => {
    dispatch(deleteItemFromCart(id));
  };
  const handleChangeQty = (id, qty) => {
    dispatch(changeQtyItem(id, qty));
  };
  return (
    <div>
      {dataCart.length > 0 ? (
        <ListItems
          dataCart={dataCart}
          handleDeleteItem={handleDeleteItem}
          handleChangeQty={handleChangeQty}
        />
      ) : (
        <div className="mt-64">
          <h2 className="text-center text-3xl font-bold">
            There's no item in cart!
          </h2>
        </div>
      )}
      <FooterCart sumMoney={totalMoney} />
    </div>
  );
}

export default React.memo(CartPage);
