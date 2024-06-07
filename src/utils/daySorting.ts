export const daySorting = (day: string) => {
  const currentDay = new Date().toLocaleString("en-us", { weekday: "long" });

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const orderedDays = [
    ...days.slice(days.indexOf(currentDay)),
    ...days.slice(0, days.indexOf(currentDay)),
  ];

  const populateDate = new Date();
  populateDate.setDate(populateDate.getDate() + orderedDays.indexOf(day));
  const populateDateOutput = populateDate.toLocaleString("default", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return { currentDay, orderedDays, populateDateOutput };
};
