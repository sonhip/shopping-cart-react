import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as actions from "./actions/index";
import LayoutComponent from "../../components/layout";
import AllProducts from "./components/allProducts/all-products";
import Carousel from "components/banner/carousel";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getData());
  }, [dispatch]);
  return (
    <>
      <div style={{ marginTop: 56 }}>
        <Carousel />
      </div>
      <LayoutComponent>
        <AllProducts />
      </LayoutComponent>
    </>
  );
};

export default React.memo(HomePage);
