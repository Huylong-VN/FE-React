import React from "react";
import { Pagination } from "antd";
import { ProductContext } from "../../../context/productContext";

const PaginationCP = () => {
  const context = React.useContext(ProductContext);
  const { pagination, handlePageChange } = context;
    console.log(pagination)
  return (
    <>
      <Pagination
        current={pagination.pageIndex}
        defaultPageSize={6}
        onChange={(page, pageSize) => handlePageChange(page, pageSize)}
        total={pagination.totalRows}
        showSizeChanger
        pageSizeOptions={[6, 10, 20, 30]}
      />
    </>
  );
};
export default PaginationCP;