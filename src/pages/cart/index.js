import React from "react";
import HeaderComponent from "components/header/header";
import ListItemsCart from "./components/index";

function CartPage(props) {
  return (
    <>
      <HeaderComponent />
      <div className="container mx-auto">
        <ListItemsCart />
      </div>
    </>
  );
}

export default React.memo(CartPage);
