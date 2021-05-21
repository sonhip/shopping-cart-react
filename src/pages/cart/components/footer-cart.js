import React from "react";
import { Link } from "react-router-dom";

function FooterCart(props) {
  const { sumMoney } = props;
  return (
    <div>
      <div className="bg-transparent 2-full h-32"></div>
      <div className="bg-main-light  fixed bottom-0 z-100 left-0 right-0 px-8 py-2 sm:px-16 sm:py-8 border-t-2 border-gray-700">
        <div className="container mx-auto">
          <div className=" text-right ">
            <h1 className="sm:text-2xl sm:font-bold">
              <span>Total Money: </span>
              {sumMoney.toLocaleString()}{" "}
              <span className="text-sm text-main">VND</span>
            </h1>
          </div>
          {sumMoney > 0 ? (
            <div className="flex justify-end">
              <Link
                to="/checkout"
                className="px-8 py-2 mt-2 focus:outline-none hover:text-white text-white font-md bg-main hover:bg-opacity-80 rounded"
              >
                Payment
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default FooterCart;
