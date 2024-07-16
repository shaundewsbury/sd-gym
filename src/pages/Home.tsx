import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBookingsContext } from "../context/BookingsContext";
import { getDateSorting } from "../utils/getDateSorting";
import { gymSessionsConfig } from "../data/gymClassData";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import Accordion from "../components/accordion/Accordion";

import {
  GymClassCard,
  GymClassCardProps,
} from "../components/cards/gym-class-card";

import Modal from "../components/modal/Modal";
import Button from "../components/button/Button";
import BookingCard from "../components/cards/booking-card/BookingCard";

const Home = () => {
  const { addNewBooking, myBookings } = useBookingsContext();
  const { currentDay, currentTime, populateCustomDates } = getDateSorting();
  const navigate = useNavigate();

  type sessionProps = {
    day: string;
    sessions: {
      id: string;
      title: string;
      time: string;
    }[];
  };

  const [availableSessions, setAvailableSessions] = useState<
    sessionProps[] | undefined
  >([]);
  const [openBookingModal, setOpenBookingModal] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<
    GymClassCardProps | undefined
  >();

  useEffect(() => {
    // COMPLETE
    const todaysIndex = gymSessionsConfig.findIndex(
      (day) => day.day === currentDay
    );

    // COMPLETE
    const orderedSessions = [
      ...gymSessionsConfig.slice(todaysIndex),
      ...gymSessionsConfig.slice(0, todaysIndex),
    ];

    // COMPLETE
    const populateSessionIDs = orderedSessions.map((days) => ({
      ...days,
      sessions: days.sessions.map((session) => ({
        id: populateGymClassID(session, days.day),
        ...session,
      })),
    }));

    // COMPLETE // RENAMES REQUIRED
    const removeBookedClasses = populateSessionIDs.map((days) => {
      const isExpired = (session: any) =>
        currentDay === days.day && currentTime > session.time;

      return {
        day: days.day,
        sessions: days.sessions
          .filter(
            (session) =>
              !myBookings
                .map((days: { id: any }) => days.id)
                .includes(session.id)
          )
          .filter((session) => !isExpired(session)),
      };
    });

    setAvailableSessions(removeBookedClasses);
  }, [myBookings]);

  const populateGymClassID = (
    item: { time: string; title: string },
    day: string
  ) => {
    return `${populateCustomDates(day).populateDate} - ${item.time} - ${
      item.title
    }`;
  };

  const bookingClickHandler = (item: GymClassCardProps, day: string) => {
    setOpenBookingModal(true);
    setBookingDetails(item);
    addNewBooking({
      id: item.id,
      title: item.title,
      time: item.time,
      day: day,
      date: populateCustomDates(day).populateDate,
    });
  };

  const goToBookingsClickHandler = async () => {
    await setOpenBookingModal(false);
    await navigate("/bookings");
  };

  return (
    <>
      {/* <Splide
        aria-label="My Favorite Images"
        options={{
          gap: "1rem",
          perPage: 2,
        }}
      >
        <SplideSlide>
          <div className="aspect-square bg-slate-300 rounded-2xl shadow-2xl"></div>
        </SplideSlide>
        <SplideSlide>
          <div className="aspect-square bg-slate-300 rounded-2xl shadow-2xl"></div>
        </SplideSlide>
        <SplideSlide>
          <div className="aspect-square bg-slate-300 rounded-2xl shadow-2xl"></div>
        </SplideSlide>
        <SplideSlide>
          <div className="aspect-square bg-slate-300 rounded-2xl shadow-2xl"></div>
        </SplideSlide>
        <SplideSlide>
          <div className="aspect-square bg-slate-300 rounded-2xl shadow-2xl"></div>
        </SplideSlide>
      </Splide> */}

      <div className="px-4">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">Gym Classes</h2>

        {availableSessions &&
          availableSessions.map((x) => (
            <div key={x.day} className="mb-8">
              <Accordion title={x.day} open={x.day === currentDay}>
                {x.sessions.length ? (
                  <div className="grid grid-cols-12 gap-4">
                    {x.sessions.map((zz) => (
                      <div
                        key={zz.id}
                        className="col-span-12 md:col-span-6 lg:col-span-4"
                      >
                        <GymClassCard
                          {...zz}
                          day={x.day}
                          onClick={() =>
                            bookingClickHandler({ ...zz, day: x.day }, x.day)
                          }
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>No gym classes currently available.</p>
                )}
              </Accordion>
            </div>
          ))}
      </div>

      <Modal
        title="Booking Confirmed!"
        isOpen={openBookingModal}
        onClose={() => setOpenBookingModal(false)}
      >
        {bookingDetails && (
          <div className="flex flex-col gap-4">
            <BookingCard
              {...bookingDetails}
              id={`${populateCustomDates(bookingDetails.day).populateDate} - ${
                bookingDetails.time
              } - ${bookingDetails.title}`}
              date={populateCustomDates(bookingDetails.day).populateDate}
            />

            <div className="flex flex-col gap-4">
              <Button
                variant="primary"
                fullWidth
                onClick={() => goToBookingsClickHandler()}
              >
                View Bookings
              </Button>

              <Button
                variant="secondary"
                fullWidth
                onClick={() => setOpenBookingModal(false)}
              >
                Back to Classes
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default Home;
