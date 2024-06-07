import { useBookingsContext } from "../context/BookingsContext";

const Confirmation = () => {
  const { myBookings, addNewBooking } = useBookingsContext();

  const onClick = () =>
    addNewBooking({ text: "this is a new post", id: myBookings.length });

  return <button onClick={onClick}>Add New Post</button>;
};

export default Confirmation;
