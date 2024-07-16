import { useBookingsContext } from "../context/BookingsContext";
import { getDateSorting } from "../utils/getDateSorting";

import BookingCard from "./cards/booking-card/BookingCard";

const MyBookingsList = () => {
  const { myBookings } = useBookingsContext();

  const { currentDate, currentTime } = getDateSorting();

  const checkExpired = (item: any) => {
    const check = `${item.date}-${item.time}`;
    const current = `${currentDate}-${currentTime}`;

    return check > current;
  };

  const validBookings = myBookings.filter((item: any) => checkExpired(item));

  validBookings.sort((a: { id: string }, b: { id: string }) =>
    a.id.localeCompare(b.id)
  );

  return (
    <div className="flex flex-col gap-3">
      {validBookings.length ? (
        <div className="grid grid-cols-12 gap-4">
          {validBookings.map((item: any) => (
            <div
              key={item.id}
              className="col-span-12 md:col-span-6 lg:col-span-4"
            >
              <BookingCard {...item} includeRemoveOption />
            </div>
          ))}
        </div>
      ) : (
        <p>You currently have no bookings.</p>
      )}
    </div>
  );
};

export default MyBookingsList;
