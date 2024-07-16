import { MdDeleteForever } from "react-icons/md";
import { useBookingsContext } from "../../../context/BookingsContext";

import { BookingCardProps } from "./types";

const BookingCard = ({
  id,
  date,
  title,
  day,
  time,
  includeRemoveOption,
}: BookingCardProps) => {
  const { removeBooking } = useBookingsContext();

  return (
    <div className="ui-booking-card flex justify-between items-center bg-slate-300 rounded border border-slate-900 shadow-2xl p-2 text-slate-900">
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p>
          {time}, {day} {date}
        </p>
      </div>
      {includeRemoveOption && (
        <button onClick={() => removeBooking(id)}>
          <MdDeleteForever className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default BookingCard;
