import React from "react";

import { Table } from "antd";

const Reservations = ({ data }) => {
  const columns = [
    {
      title: "",
      dataIndex: "index",
      key: "index",
      width: 50
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time"
    },
    {
      title: "",
      dataIndex: "",
      key: "x",
      render: (_, record) => (record.isConfirmed ? "Confirmed" : "Pending")
    }
  ];

  return <Table rowKey="id" dataSource={data} columns={columns} />;
};

export default Reservations;
