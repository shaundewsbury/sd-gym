import { useBookingsContext } from "../../context/BookingsContext";

import { daySorting } from "../../utils/daySorting";

import Button from "../button/Button";

import { CheckoutCardProps } from "./types";

const CheckoutCard = ({
  className,
  id,
  day,
  price,
  time,
  title,
}: CheckoutCardProps) => {
  const { orderedDays, populateDateOutput } = daySorting(day);

  const { addNewBooking } = useBookingsContext();

  const confirmBookingClickHandler = () =>
    addNewBooking({
      id: `${id} - ${populateDateOutput}`,
      title: title,
      day: day,
      time: time,
      date: populateDateOutput,
    });

  return (
    <div className={`ui-checkout-card w-full ${className}`}>
      <h2 className="font-semibold">{title}</h2>
      <p>{time}</p>
      <p className="mb-2">
        {day} {populateDateOutput}
      </p>
      <p className="font-semibold my-2">£{price.toFixed(2)}</p>

      <Button
        text="Confirm Booking"
        variant="primary"
        onClick={() => confirmBookingClickHandler()}
      />
    </div>
  );
};

export default CheckoutCard;
