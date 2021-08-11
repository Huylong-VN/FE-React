import React from "react";
import { ProductContext } from "../../../context/productContext";
import { Table } from "antd";
import { SpinData } from "../../Common";

export const TableData = () => {
  const context = React.useContext(ProductContext);
  const { Datas, load } = context;
  const columns = [
    {
      title: "ProductName",
      dataIndex: "name",
      key: "name",
    },
    {
        title: "Price",
        dataIndex: "price",
        key: "price",
    },
    {
        title: "Description",
        dataIndex: "description",
        key: "description",
    },
    {
        title: "Image",
        dataIndex: "image",
        key: "image",
        render: (src)=>(<img src={"https://anhhuy37.herokuapp.com/user-content/"+src} style={{height:80,width:80}} alt="none"/>)
    },
    {
        title: "dateCreated",
        dataIndex: "dateCreated",
        key: "dateCreated",

    }
  ];
  return (
    <div>
      {load === true ? (
        <Table dataSource={Datas} columns={columns} />
      ) : (
        <SpinData position="center"/>
      )}
    </div>
  );
};
