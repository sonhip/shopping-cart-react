import React, { useState } from "react";
import Products from "./products";
import Orders from "./orders";
import Users from "./users";
function Main() {
  const [isOpenProducts, setIsOpenProducts] = useState(false);
  const [isOpenUsers, setIsOpenUsers] = useState(false);
  const [isOpenOrders, setIsOpenOrders] = useState(false);
  const handleClickOpen = (val) => {
    if (val === "users") {
      setIsOpenOrders(false);
      setIsOpenProducts(false);
      setIsOpenUsers(true);
    }
    if (val === "products") {
      setIsOpenOrders(false);
      setIsOpenProducts(true);
      setIsOpenUsers(false);
    }
    if (val === "orders") {
      setIsOpenOrders(true);
      setIsOpenProducts(false);
      setIsOpenUsers(false);
    }
  };
  return (
    <div className="flex">
      <div className="w-1/4 bg-sitebar">
        <div className="font-bold text-2xl text-black text-center py-2 bg-hover ">
          Manager
        </div>
        <div className="flex flex-col">
          <button
            onClick={() => handleClickOpen("users")}
            className="py-2 border-t-2 focus:outline-none focus:bg-gray-500 text-xl font-medium bg-gray-400 hover:bg-gray-500"
          >
            Users
          </button>
          <button
            onClick={() => handleClickOpen("products")}
            className="py-2 border-t-2 focus:outline-none focus:bg-gray-500 text-xl font-medium bg-gray-400 hover:bg-gray-500"
          >
            Products
          </button>
          <button
            onClick={() => handleClickOpen("orders")}
            className="py-2 border-t-2 focus:outline-none focus:bg-gray-500 text-xl font-medium bg-gray-400 hover:bg-gray-500"
          >
            Orders
          </button>
        </div>
      </div>
      <div className="w-3/4">{isOpenProducts ? <Products /> : null}</div>
      {isOpenOrders ? <Orders /> : null}
      {isOpenUsers ? <Users /> : null}
    </div>
  );
}

export default Main;
