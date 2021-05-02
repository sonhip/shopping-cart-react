import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as actions from "./actions/index";
import LayoutComponent from "../../components/layout";
import FeaturedComponent from "./components/featured/featured";
import LatestComponent from "./components/latest/latest";
import SellingComponent from "./components/topSelling/top_selling";
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
        <FeaturedComponent />
        <LatestComponent />
        <SellingComponent />
      </LayoutComponent>
    </>
  );
};

export default React.memo(HomePage);
