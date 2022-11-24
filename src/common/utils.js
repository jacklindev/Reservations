export const formatSchedule = (start, end) => {
  const isOnSameDay =
    start.year() === end.year() &&
    start.month() === end.month() &&
    start.date() === end.date();

  if (isOnSameDay) {
    return `${start.format("YYYY/MM/DD")}  ${start.format(
      "h:mm a"
    )} ~ ${end.format("h:mm a")}`;
  }
  return `${start.format("YYYY/MM/DD h:mm a")} - ${end.format(
    "YYYY/MM/DD h:mm a"
  )}`;
};
