import { useBookingsContext } from "../context/BookingsContext";
import { MdDeleteForever } from "react-icons/md";
import { daySorting } from "../utils/daySorting";

const MyBookingsList = () => {
  const { myBookings, removeBooking } = useBookingsContext();

  return (
    <div className="flex flex-col gap-3">
      {myBookings.length ? (
        myBookings.map((item) => (
          <div className="flex justify-between items-center bg-slate-300 rounded-lg p-4">
            <div>
              <p className="font-bold">{item.title}</p>
              <p>
                {item.time} {item.day} {item.date}
              </p>
            </div>
            <button onClick={() => removeBooking(item.id)}>
              <MdDeleteForever className="w-6 h-6" />
            </button>
          </div>
        ))
      ) : (
        <p>You currently have no bookings.</p>
      )}
    </div>
  );
};

export default MyBookingsList;
