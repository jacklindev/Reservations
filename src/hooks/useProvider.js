import { useState, useMemo } from "react";

import { formatSchedule } from "../common/utils";
import { actions } from "../store/actions";

export const useProvider = ({ data, dispatch }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const schedules = useMemo(
    () =>
      data.schedules
        .map((item, index) => ({
          id: item.id,
          index: index + 1,
          schedule: formatSchedule(item.schedule[0], item.schedule[1]),
          data: item.schedule
        }))
        .sort((first, second) =>
          first.data[0].isAfter(second.data[0]) ? 1 : -1
        ),
    [data]
  );

  const reservations = useMemo(
    () =>
      data.reservations
        .map((item, index) => ({
          id: item.id,
          index: index + 1,
          time: formatSchedule(item.timeslot[0], item.timeslot[1]),
          isConfirmed: item.isConfirmed,
          data: item.timeslot
        }))
        .sort((first, second) =>
          first.data[0].isAfter(second.data[0]) ? 1 : -1
        ),
    [data]
  );

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  const onAddSchedule = (schedule) => {
    dispatch({
      type: actions.ADD_SCHEDULE,
      data: schedule
    });
    closeModal();
  };

  const onAddReservation = (timeslot) => {
    dispatch({
      type: actions.ADD_RESERVATION,
      data: timeslot
    });
    closeModal();
  };

  const onDeleteSchedule = (id) => {
    dispatch({
      type: actions.REMOVE_SCHEDULE,
      data: id
    });
  };

  const confirmReservation = (id) => {
    dispatch({
      type: actions.CONFIRM_RESERVATION,
      data: id
    });
  };

  return {
    isModalOpen,
    schedules,
    reservations,
    openModal,
    closeModal,
    onAddSchedule,
    onDeleteSchedule,
    confirmReservation,
    onAddReservation
  };
};
