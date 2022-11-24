import React, { useState } from "react";

import { Space } from "antd";

import Reservations from "./reservations";
import Schedules from "./schedules";
import AddReservation from "./add-reservation";
import { useProvider } from "../../hooks/useProvider";

const Client = ({ data, dispatch }) => {
  const [selectedSchedule, setSelectedSchedule] = useState(null);

  const {
    isModalOpen,
    reservations,
    schedules,
    openModal,
    closeModal,
    onAddReservation,
    confirmReservation
  } = useProvider({ data, dispatch });

  const onReserve = (selected) => {
    setSelectedSchedule(selected.data);
    openModal();
  };

  return (
    <>
      <Space direction="vertical">
        <h2>Schedules</h2>
        <Schedules data={schedules} onReserve={onReserve} />
      </Space>
      <Space direction="vertical">
        <h2>Reservations</h2>
        <Reservations data={reservations} onConfirm={confirmReservation} />
      </Space>
      {isModalOpen && (
        <AddReservation
          open={isModalOpen}
          schedule={selectedSchedule}
          onAdd={onAddReservation}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default Client;
