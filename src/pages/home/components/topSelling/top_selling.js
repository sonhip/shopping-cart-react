import React from "react";
import ListCards from "../list-card/list_cards";
import * as reselect from "../../reselect/products_reselect";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";

const TopSellingProducts = () => {
  const { loading, topSelling } = useSelector(
    createStructuredSelector({
      loading: reselect.loadingSelector,
      topSelling: reselect.getTopSellingSelector,
    })
  );
  return (
    <>
      <div className="mx-auto my-8">
        <h2>Top Selling Products</h2>
      </div>
      <ListCards loading={loading} data={topSelling} />
    </>
  );
};

export default React.memo(TopSellingProducts);
