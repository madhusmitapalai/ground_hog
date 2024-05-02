import { Button, Table } from "antd";
import React from "react";
import car from "../assets/car.png";
import { PlusCircleOutlined } from "@ant-design/icons";
import arrow from "../assets/arrow_up.png";
import filter from "../assets/Filter.png";
const Assets = () => {
  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: () => (
        <img src={car} alt="Asset" style={{ width: "50px", height: "50px" }} />
      ),
    },
    {
      title: "Assets ID",
      dataIndex: "assetsId",
      key: "assetsId",
    },
    {
      title: "Assets Type",
      dataIndex: "assetsType",
      key: "assetsType",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "",
      key: "action",
      render: () => (
        <a href="#">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 10, fontWeight: 700 }}>.</span>
            <span style={{ fontSize: 10, fontWeight: 700, marginTop: "-10px" }}>
              .
            </span>
            <span style={{ fontSize: 10, fontWeight: 700, marginTop: "-10px" }}>
              .
            </span>
          </div>
        </a>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      image: "url_to_image",
      assetsId: "MU3567",
      assetsType: "CAT AD30",
      description: "Articulated Dump Truck",
    },
    {
      key: "1",
      image: "url_to_image",
      assetsId: "MU3567",
      assetsType: "CAT AD30",
      description: "Articulated Dump Truck",
    },
    {
      key: "1",
      image: "url_to_image",
      assetsId: "MU3567",
      assetsType: "CAT AD30",
      description: "Articulated Dump Truck",
    },
    {
      key: "1",
      image: "url_to_image",
      assetsId: "MU3567",
      assetsType: "CAT AD30",
      description: "Articulated Dump Truck",
    },
    {
      key: "1",
      image: "url_to_image",
      assetsId: "MU3567",
      assetsType: "CAT AD30",
      description: "Articulated Dump Truck",
    },
    {
      key: "1",
      image: "url_to_image",
      assetsId: "MU3567",
      assetsType: "CAT AD30",
      description: "Articulated Dump Truck",
    },
  ];

  return (
    <div className="assets_container">
      <header
        style={{
          //   backgroundColor: "transparent",
          color: "black",
          //   padding: "5px",
        }}
      >
        <h2>Assets</h2>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <img src={arrow} alt="img" style={{ width: 20, height: 20 }} />
          <img src={filter} alt="img" style={{ width: 20, height: 20 }} />
          <Button>
            <PlusCircleOutlined /> New Assets
          </Button>
        </div>
      </header>
      <div style={{ backgroundColor: "transparent", padding: "10px" }}>
        <Table columns={columns} dataSource={data} bordered={false} />
      </div>
    </div>
  );
};

export default Assets;
