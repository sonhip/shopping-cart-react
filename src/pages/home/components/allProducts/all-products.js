import React from "react";
import ListCards from "../list-card/list_cards";

const AllProducts = (props) => {
  const { data, loading } = props;

  return (
    <>
      <div className="sm:bg-indigo-200 sm:p-8 mt-16 rounded">
        <h2 className="text-xl font-bold text-center ">All products</h2>
        <ListCards loading={loading} data={data} />
      </div>
    </>
  );
};

export default React.memo(AllProducts);
