export const time = (i) => {
  const updatedAt = new Date(i.updatedAt);
  let hours = updatedAt.getHours();
  const minutes = updatedAt.getMinutes();
  const seconds = updatedAt.getSeconds();
  const period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  const timestring = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${period}`;

  const datestring = `${updatedAt.getFullYear()}-${(updatedAt.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${updatedAt.getDate().toString().padStart(2, "0")}`;

  return `${datestring} ${timestring}`;
};
