import React from "react";

import { Table, Button } from "antd";

const Reservations = ({ data, onConfirm }) => {
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
      render: (_, record) =>
        record.isConfirmed ? (
          "Confirmed"
        ) : (
          <Button
            type="primary"
            size="small"
            onClick={() => onConfirm(record.id)}
          >
            Confirm
          </Button>
        )
    }
  ];

  return <Table rowKey="id" dataSource={data} columns={columns} />;
};

export default Reservations;
