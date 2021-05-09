import React from "react";
import ListCards from "../list-card/list_cards";
import * as reselect from "../../reselect/products_reselect";
import { createStructuredSelector } from "reselect";
import { useSelector, useDispatch } from "react-redux";
import { push } from "connected-react-router";

const AllProducts = () => {
  const dispatch = useDispatch();
  const { loading, data } = useSelector(
    createStructuredSelector({
      loading: reselect.loadingSelector,
      data: reselect.getDataProducts,
    })
  );

  return (
    <>
      <div className="mx-auto my-8">
        <h2>Feature Products</h2>
        <button onClick={() => dispatch(push("/cart"))}>Link</button>
      </div>
      <ListCards loading={loading} data={data} />
    </>
  );
};

export default React.memo(AllProducts);
