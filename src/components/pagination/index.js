import React from "react";
import { Pagination } from "antd";
import { useSelector } from "react-redux";

function PaginationComponent(props) {
  const { getCurrentPage, currentPage } = props;
  const data = useSelector((state) => state.productsReducer.dataProducts);

  return (
    <div className="flex justify-center m-8">
      <Pagination
        total={data.length}
        current={currentPage}
        defaultCurrent={1}
        pageSize={10}
        showQuickJumper
        hideOnSinglePage
        onChange={(val) => getCurrentPage(val)}
      />
    </div>
  );
}

export default PaginationComponent;
