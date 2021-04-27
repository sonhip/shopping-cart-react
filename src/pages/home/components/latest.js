import React from "react";
import ListCards from "./list_cards";

const LatestProducts = () => {
  return (
    <>
      <div className="mx-auto my-8">
        <h2>Latest Products</h2>
      </div>
      <ListCards />
    </>
  );
};

export default React.memo(LatestProducts);
