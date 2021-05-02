import React from "react";
import ListCards from "../list-card/list_cards";
import * as reselect from "../../reselect/products_reselect";
import { createStructuredSelector } from "reselect";
import { useSelector } from "react-redux";

const LatestProducts = () => {
  const { loading, latest } = useSelector(
    createStructuredSelector({
      loading: reselect.loadingSelector,
      latest: reselect.getLatestSelector,
    })
  );

  return (
    <>
      <div className="mx-auto my-8">
        <h2>Latest Products</h2>
      </div>
      <ListCards loading={loading} data={latest} />
    </>
  );
};

export default React.memo(LatestProducts);
