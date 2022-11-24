import React from "react";

import { Table, Button } from "antd";

const Schedules = ({ data, onDelete }) => {
  const columns = [
    {
      title: "",
      dataIndex: "index",
      key: "index",
      width: 50
    },
    {
      title: "Schedule",
      dataIndex: "schedule",
      key: "schedule"
    },
    {
      title: "",
      dataIndex: "",
      key: "x",
      render: (_, record) => (
        <Button size="small" danger onClick={() => onDelete(record.id)}>
          Delete
        </Button>
      )
    }
  ];

  return <Table rowKey="id" dataSource={data} columns={columns} />;
};

export default Schedules;
