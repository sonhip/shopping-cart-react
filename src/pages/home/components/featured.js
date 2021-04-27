import React from "react";
import ListCards from "./list_cards";

const FeaturedProducts = () => {
  return (
    <>
      <div className="mx-auto my-8">
        <h2>Feature Products</h2>
      </div>
      <ListCards />
    </>
  );
};

export default React.memo(FeaturedProducts);
