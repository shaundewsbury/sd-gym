import { useEffect, useState } from "react";
import { useBookingsContext } from "../../context/BookingsContext";
import { daySorting } from "../../utils/daySorting";
import { GiConfirmed } from "react-icons/gi";

import { MdDeleteForever } from "react-icons/md";

export type GymClassProps = {
  id: string;
  title: string;
  description: string;
  day: string;
  time: string;
  price: number;
  onClick: () => void;
};

const GymClass = ({
  id,
  title,
  description,
  day,
  time,
  price,
  onClick,
}: GymClassProps) => {
  const [isBooked, setIsBooked] = useState(false);

  const { myBookings, removeBooking } = useBookingsContext();

  const { populateDateOutput } = daySorting(day);

  const populateID = `${id} - ${populateDateOutput}`;

  const checkBooked = (obj: { id: string }) => obj.id === populateID;

  useEffect(() => {
    setIsBooked(myBookings.some(checkBooked));
  }, [myBookings]);

  return (
    <div className="flex flex-col gap-2 p-4 rounded shadow-2xl bg-slate-700 text-white">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">{title}</h2>

        <div className="bg-slate-500 p-2 rounded">
          <p>
            {day.substr(0, 3)} {time}
          </p>
          <p></p>
        </div>
      </div>

      {!isBooked && <p className="text-sm line-clamp-2">{description}</p>}

      {!isBooked && (
        <p className="text-xl font-bold my-2">£{price.toFixed(2)}</p>
      )}

      {!isBooked ? (
        <button
          className="p-2 bg-slate-200 text-slate-700 font-bold text-lg rounded shadow-lg hover:bg-slate-300"
          onClick={onClick}
        >
          Add Class
        </button>
      ) : (
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 text-slate-200 font-bold text-lg">
            <GiConfirmed className="w-6 h-6" /> Booked
          </div>
          <button onClick={() => removeBooking(populateID)}>
            <MdDeleteForever className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
};

export default GymClass;
