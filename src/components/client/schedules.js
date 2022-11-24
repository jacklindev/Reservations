import React from "react";

import { Button, Table } from "antd";
import moment from "moment";

const Schedules = ({ data, onReserve }) => {
  const reserveDisabled = (startTime) => {
    const limitTime = moment(startTime).subtract(1, "days");
    return moment().isAfter(limitTime);
  };

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
      align: "center",
      render: (_, record) =>
        reserveDisabled(record.data[0]) ? (
          ""
        ) : (
          <Button size="small" type="primary" onClick={() => onReserve(record)}>
            Reserve
          </Button>
        )
    }
  ];

  return (
    <>
      <p>Reservations must be made at least 24 hours in advance.</p>
      <Table rowKey="id" dataSource={data} columns={columns} />
    </>
  );
};

export default Schedules;
