import React from "react";
import LayoutComponent from "components/layout";
import ListItemsCart from "./components/list-cart/index";

function CartPage(props) {
  return (
    <div style={{ marginTop: 56 }}>
      <LayoutComponent>
        <ListItemsCart />
      </LayoutComponent>
    </div>
  );
}

export default React.memo(CartPage);
