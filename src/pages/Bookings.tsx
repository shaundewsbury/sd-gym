import PageTitle from "../components/page-title/PageTitle";
import MyBookingsList from "../components/MyBookingsList";

const Bookings = () => {
  return (
    <div className="px-4">
      <PageTitle title="My Bookings" />

      <MyBookingsList />
    </div>
  );
};

export default Bookings;
