import React from "react";
import { Pagination } from "antd";

function PaginationComponent(props) {
  const { getCurrentPage, currentPage, data } = props;
  const transition = () => {
    window.scrollTo(0, 1900);
  };
  const handleChangePage = (val) => {
    getCurrentPage(val);
    transition();
  };
  return (
    <div className="flex justify-center m-8">
      <Pagination
        total={data.length}
        current={currentPage}
        defaultCurrent={1}
        pageSize={10}
        showQuickJumper
        hideOnSinglePage
        onChange={(val) => handleChangePage(val)}
      />
    </div>
  );
}

export default PaginationComponent;
