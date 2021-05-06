import React from "react";
import { Image, InputNumber, Button } from "antd";
import * as reselect from "../../reselect/cart-reselect";
import { useSelector, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import { deleteItemFromCart } from "pages/cart/actions/index";
import { changeQtyItem } from "../../actions/index";

function ListItemsCart() {
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
    <>
      <div>
        <h1>List Item cart</h1>
      </div>
      {dataCart.length > 0
        ? dataCart.map((item) => {
            return (
              <div>
                <div>
                  <Image width={200} src={item.image} />
                </div>
                <div>
                  <h2>{item.name}</h2>
                  <p>price: {parseFloat(item.price).toLocaleString()}</p>
                  <p>Money: {(item.price * item.qty).toLocaleString()}</p>
                  <InputNumber
                    min={1}
                    max={10}
                    defaultValue={item.qty}
                    onChange={(val) => handleChangeQty(item.id, val)}
                  />
                  <p>
                    <Button
                      type="dashed"
                      onClick={() => handleDeleteItem(item.id)}
                    >
                      Remove
                    </Button>
                  </p>
                </div>
              </div>
            );
          })
        : null}
      <div className="text-right border-t-2 w-full border-gray-700">
        <h1 className="text-2xl font-bold">{sumMoney.toLocaleString()}</h1>
      </div>
    </>
  );
}

export default React.memo(ListItemsCart);
