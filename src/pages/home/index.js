import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as reselect from "./reselect/products_reselect";
import * as actions from "./actions/index";
import LayoutComponent from "../../components/layout";
import FeaturedComponent from "./components/featured";
import LatestComponent from "./components/latest";
import SellingComponent from "./components/top_selling";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getData());
  }, [dispatch]);
  return (
    <>
      <LayoutComponent>
        <FeaturedComponent />
        <LatestComponent />
        <SellingComponent />
      </LayoutComponent>
    </>
  );
};

export default React.memo(HomePage);
