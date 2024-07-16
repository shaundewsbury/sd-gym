export const getDateSorting = () => {
  const date = new Date();
  const currentDay = date.toLocaleString("en-us", { weekday: "long" });
  const currentTime = `${date.getHours()}:${date.getMinutes()}`;

  const currentDate = date.toLocaleString("default", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });

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

  const populateCustomDates = (day: string) => {
    const customDate = new Date();

    customDate.setDate(date.getDate() + orderedDays.indexOf(day));

    const populateDate = customDate.toLocaleString("default", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    });

    const populateDateID = `${date.getFullYear()}`;

    return { populateDate, populateDateID };
  };

  return {
    currentDate,
    currentDay,
    currentTime,
    orderedDays,
    populateCustomDates,
  };
};
