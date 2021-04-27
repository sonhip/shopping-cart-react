import React from "react";
import ListCards from "./list_cards";

const TopSellingProducts = () => {
  return (
    <>
      <div className="mx-auto my-8">
        <h2>Top Selling Products</h2>
      </div>
      <ListCards />
    </>
  );
};

export default React.memo(TopSellingProducts);
