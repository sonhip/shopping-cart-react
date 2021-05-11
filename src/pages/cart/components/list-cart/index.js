import React from "react";
import { Image, InputNumber, Button } from "antd";
import * as reselect from "../../reselect/cart-reselect";
import { useSelector, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import { deleteItemFromCart } from "pages/cart/actions/index";
import { changeQtyItem } from "../../actions/index";
import { Link } from "react-router-dom";

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
      <div className="mb-8 px-4">
        {dataCart.length > 0
          ? dataCart.map((item) => {
              return (
                <div key={item.id} className="mt-8 sm:flex sm:justify-between">
                  <div>
                    <Image width={200} src={item.image} />
                  </div>
                  <div className="sm:flex-1 sm:ml-32">
                    <h1 className="text-xl">{item.name}</h1>
                    <h2>
                      Price: {parseFloat(item.price).toLocaleString()}{" "}
                      <span className="text-md text-red-500">
                        <span className="text-xs text-red-500">VND</span>
                      </span>
                    </h2>
                    <h2 className="sm:mb-8">
                      Money: {(item.price * item.qty).toLocaleString()}{" "}
                      <span className="text-md text-red-500">
                        <span className="text-xs text-red-500">VND</span>
                      </span>
                    </h2>
                    <InputNumber
                      min={1}
                      max={10}
                      defaultValue={item.qty}
                      onChange={(val) => handleChangeQty(item.id, val)}
                    />
                    <p>
                      <Button
                        danger
                        className="mt-2"
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
      </div>
      <div className="bg-transparent 2-full h-32"></div>
      <div className="bg-indigo-200 fixed bottom-0 z-10 left-0 right-0 px-8 py-2 sm:px-16 sm:py-8 border-t-2 border-gray-700">
        <div className="container mx-auto">
          <div className=" text-right ">
            <h1 className="sm:text-2xl sm:font-bold">
              <span>Total Money: </span>
              {sumMoney.toLocaleString()}{" "}
              <span className="text-sm text-red-500">VND</span>
            </h1>
          </div>
          {sumMoney > 0 ? (
            <div className="flex justify-end">
              <Link
                to="/checkout"
                className="px-8 py-2 mt-2 focus:outline-none hover:text-white text-white font-md bg-indigo-500 hover:bg-indigo-700 rounded"
              >
                Payment
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default React.memo(ListItemsCart);
