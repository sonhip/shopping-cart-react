import React from "react";
import { Pagination } from "antd";

function PaginationComponent(props) {
  const { getCurrentPage, currentPage, data } = props;

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
