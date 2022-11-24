import React, { useState } from "react";

import { Modal, Space, DatePicker } from "antd";

const { RangePicker } = DatePicker;

const AddSchedule = ({ open, onAdd, onClose }) => {
  const [schedule, setSchedule] = useState([]);

  const onChange = (values) => {
    setSchedule(values);
  };

  return (
    <Modal
      title="Add new schedule"
      open={open}
      onOk={() => onAdd(schedule)}
      onCancel={onClose}
      okText="Add"
    >
      <Space>
        <RangePicker showTime onChange={onChange} />
      </Space>
    </Modal>
  );
};

export default AddSchedule;
