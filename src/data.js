import moment from "moment";
import { uuid } from "uuidv4";

export const SCHEDULES = [
  {
    id: uuid(),
    schedule: [
      moment("24/11/2022 09:15:00", "DD/MM/YYYY hh:mm:ss"),
      moment("24/11/2022 17:15:00", "DD/MM/YYYY hh:mm:ss")
    ]
  },
  {
    id: uuid(),
    schedule: [
      moment("26/11/2022 09:15:00", "DD/MM/YYYY hh:mm:ss"),
      moment("26/11/2022 17:15:00", "DD/MM/YYYY hh:mm:ss")
    ]
  }
];

export const RESERVATIONS = [
  {
    id: uuid(),
    scheduleId: SCHEDULES[0].id,
    timeslot: [
      moment("26/11/2022 09:15:00", "DD/MM/YYYY hh:mm:ss"),
      moment("26/11/2022 09:30:00", "DD/MM/YYYY hh:mm:ss")
    ],
    isConfirmed: false
  }
];
