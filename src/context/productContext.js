import React, { useState, useEffect } from "react";
import productApi from "../api/productApi";
import { notification } from "antd";
export const ProductContext = React.createContext();

const ProductContextProvider = ({ children }) => {
  const [Datas, setData] = useState([]);
  const [load, setload] = useState(false);

  var [pagination, setpagination] = useState({
    pageIndex: 1,
  });
  var [filters, setfilters] = useState({
    pageIndex: 1,
    pageSize: 6,
    keyword: "",
  });

  const handlePageChange = (page, pageSize) => {
    setload(false);
    setfilters({
      ...filters,
      pageIndex: page,
      pageSize: pageSize,
    });
  };
  const handleFiltersChange = (newFilters) => {
    setload(false);
    setfilters({
      ...filters,
      keyword: newFilters,
    });
  };

  //CRUD
  //GEt
  const getAll = async (data) => {
    const response = await productApi.getAll(data);
    setData(response.items);
    setpagination({
      pageIndex: response.pageIndex,
      pageSize: response.pageSize,
      totalRows: response.toTalRecords,
    });
    setload(true);
  };

  //Add a new
  const Add = async (data) => {
    await productApi
      .register(data)
      .then((response) => {
        console.log(response);
        openNotificationWithIcon("success", "Đăng kí thành Công");
      })
      .catch((error) => {
        openNotificationWithIcon("error", error.response.data);
      });
    getAll(filters);
  };

  //Update user
  const Update = async (id, row) => {
    await productApi
      .update({
        userId: localStorage.getItem("Id"),
        id: id,
        CategoryId: row.categoryId,
        Name: row.name,
        Price: row.price,
        Description: row.description,
       
      })
      .then(() => {
        openNotificationWithIcon("success", "Update Success");
        setData(
          Datas.map((item) =>
            item.id === id
              ? {
                  ...item,
                  dob: row.dob,
                  email: row.email,
                  firstname: row.firstName,
                  lastname: row.lastName,
                  phone: row.phoneNumber,
                }
              : item
          )
        );
      })
      .catch((err) => {
        openNotificationWithIcon("error", err);
      });
  };

  //Delete
  const Delete = async (id) => {
    await productApi
      .delete({
        userId: localStorage.getItem("Id"),
        id: id,
      })
      .then(() => {
        getAll(filters);
        // setData(
        //  Datas.filter((data)=>data.id === id)
        //   ))

        openNotificationWithIcon("success", "Delete Success");
      })
      .catch((err) => {
        openNotificationWithIcon("error", err.response.data);
      });
  };

  const openNotificationWithIcon = (type, mes) => {
    notification[type]({
      message: "Notification Title",
      description: mes,
    });
  };

  useEffect(() => {
    getAll(filters);
  }, [filters]);

  // Context data
  const productContextData = {
    openNotificationWithIcon,
    getAll,
    Update,
    Delete,
    Add,
    Datas,
    load,
    pagination,
    handlePageChange,
    handleFiltersChange,
  };

  //return provider
  return (
    <ProductContext.Provider value={productContextData}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
