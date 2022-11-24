import React from "react";
import { Space, Button } from "antd";

import AddSchedule from "./add-schedule";
import Reservations from "./reservations";
import Schedules from "./schedules";
import { useProvider } from "../../hooks/useProvider";

const Provider = ({ data, dispatch }) => {
  const {
    isModalOpen,
    schedules,
    reservations,
    openModal,
    closeModal,
    onAddSchedule,
    onDeleteSchedule
  } = useProvider({ data, dispatch });

  return (
    <div>
      <Space direction="vertical">
        <h2>Schedules</h2>
        <Button type="primary" onClick={openModal}>
          Add a schedule
        </Button>
        <Schedules data={schedules} onDelete={onDeleteSchedule} />
      </Space>
      <Space direction="vertical">
        <h2>Reservations</h2>
        <Reservations data={reservations} />
      </Space>
      <AddSchedule
        open={isModalOpen}
        onAdd={onAddSchedule}
        onClose={closeModal}
      />
    </div>
  );
};

export default Provider;
