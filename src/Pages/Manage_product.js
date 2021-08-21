import React from "react";
import Create from "../Components/Admin/Product/Create";
import ProductContextProvider from "../context/productContext";
import Search from "../Components/Search"
import PaginationCpn from "../Components/Admin/Product/PaginationCP";
import { TableData } from "../Components/Admin/Product/Table";
const Manage_product = () => {
  return (
    <ProductContextProvider>
      <Create />
      <Search />
      <TableData/>
      <PaginationCpn />
    </ProductContextProvider>
  );
};

export default Manage_product;
