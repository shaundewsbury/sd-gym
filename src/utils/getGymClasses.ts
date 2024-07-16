// import { useBookingsContext } from "../context/BookingsContext";
import { gymSessionsConfig } from "../data/gymClassData";
import { getDateSorting } from "./getDateSorting";

import { GymClassCardProps } from "../components/cards/gym-class-card";

export const getGymClasses = (day: string) => {
  // const { myBookings } = useBookingsContext();

  const { currentTime, currentDay, populateCustomDates } = getDateSorting();

  const gymSession = gymSessionsConfig.find((item) => item.day === day);

  const items: GymClassCardProps[] = [];

  if (gymSession) {
    gymSession.sessions.map((session) => {
      const isExpired = currentDay === day && currentTime > session.time;

      // const isBooked = myBookings.find(
      //   (item: { id: string }) =>
      //     item.id ===
      //     `${populateCustomDates(day).populateDate} - ${session.time} - ${
      //       session.title
      //     }`
      // );

      if (!isExpired) {
        items.push({
          time: session.time,
          title: session.title,
          day: day,
        });
      }
      items.sort((a, b) => a.time.localeCompare(b.time));

      return items;
    });
  }

  return items;
};
