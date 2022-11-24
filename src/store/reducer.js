import { uuid } from "uuidv4";
import { actions } from "./actions";

import { SCHEDULES, RESERVATIONS } from "../data";

export const initialState = {
  schedules: [...SCHEDULES],
  reservations: [...RESERVATIONS]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_SCHEDULE:
      return {
        ...state,
        schedules: [
          ...state.schedules,
          {
            id: uuid(),
            schedule: action.data
          }
        ]
      };
    case actions.REMOVE_SCHEDULE:
      return {
        ...state,
        schedules: state.schedules.filter((item) => item.id !== action.data)
      };
    case actions.CONFIRM_RESERVATION:
      return {
        ...state,
        reservations: state.reservations.map((item) => {
          if (item.id === action.data) {
            return {
              ...item,
              isConfirmed: true
            };
          }

          return item;
        })
      };
    case actions.ADD_RESERVATION:
      return {
        ...state,
        reservations: [
          ...state.reservations,
          {
            id: uuid(),
            timeslot: action.data,
            isConfirmed: false
          }
        ]
      };
    default:
      return state;
  }
};
