import React, { useState, useMemo } from "react";
import moment from "moment";

import { Modal, Space, DatePicker, Select } from "antd";

const AddReservation = ({ open, schedule, onAdd, onClose }) => {
  const [startTime, setStartTime] = useState(() =>
    schedule ? schedule[0] : moment()
  );
  const [period, setPeriod] = useState(15);

  const availablePeriods = [
    {
      label: "15m",
      value: 15
    },
    {
      label: "30m",
      value: 30
    }
  ];

  const timeSlot = useMemo(() => {
    if (startTime) {
      return [moment(startTime), moment(startTime).add(period, "minutes")];
    }

    return [];
  }, [period, startTime]);

  const onChange = (value) => {
    setStartTime(value);
  };

  const disabledDate = (current) => {
    if (!schedule) {
      return false;
    }

    const firstTime = moment(schedule[0]);
    const endTime = moment(schedule[1]);

    return current.isBefore(firstTime) || current.isAfter(endTime);
  };

  return (
    <Modal
      title="Reserve"
      open={open}
      onOk={() => onAdd(timeSlot)}
      onCancel={onClose}
      okText="Reserve"
    >
      <Space direction="vertical">
        <Space>
          <h4>Start Time:</h4>
          <DatePicker
            defaultValue={startTime}
            format="YYYY/MM/DD h:mm a"
            showTime
            disabledDate={disabledDate}
            onChange={onChange}
          />
        </Space>
        <Space>
          <h4>Period:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
          <Select
            defaultValue={period}
            options={availablePeriods}
            onChange={setPeriod}
            style={{ width: 210 }}
          />
        </Space>
      </Space>
    </Modal>
  );
};

export default AddReservation;
