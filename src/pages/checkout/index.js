import React from "react";
import { useSelector } from "react-redux";
import LayoutComponent from "components/layout";
import ReCheck from "./component/reCheckout/reCheckout";
import Confirm from "./component/confirm/confirm";

function Checkout() {
  const data = useSelector((state) => state.login.data);
  return (
    <>
      <LayoutComponent>
        <div style={{ marginTop: "56px" }}>
          {data !== null ? <Confirm /> : <ReCheck />}
        </div>
      </LayoutComponent>
    </>
  );
}

export default React.memo(Checkout);
