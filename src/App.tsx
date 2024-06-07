// @ts-nocheck

import { useState } from "react";
import { listOfClasses } from "./data/listOfClasses";
import { daySorting } from "./utils/daySorting";

import { SearchProvider } from "./context/BookingsContext";

import NavBar from "./components/nav-bar/NavBar";
import Button from "./components/button/Button";
import GymClass from "./components/gym-class/GymClass";
import Accordion from "./components/accordion/Accordion";
import Modal from "./components/modal/Modal";
import CheckoutCard from "./components/checkout-card/CheckoutCard";

const { currentDay, orderedDays } = daySorting();

function App() {
  const getClassItemsByDay = (day: string) => {
    const items = listOfClasses.filter((item) => item.day === day);
    items.sort((a, b) => a.time.localeCompare(b.time));
    return items;
  };

  const [openAddedClassModal, setOpenAddedClassModal] = useState(false);
  const [openConfirmedClassModal, setOpenConfirmedClassModal] = useState(false);

  const [bookingData, setBookingData] = useState({});

  const addClassClickHandler = (data) => {
    setBookingData(data);
    setOpenAddedClassModal(true);
  };

  // const { basketItems, removeFromBasket, increaseBasketQuantity } =
  //   useShoppingBasket();

  // console.log(basketItems, removeFromBasket, increaseBasketQuantity("1"));

  const confirmBookingClickHandler = () => {
    setOpenAddedClassModal(false);
    setOpenConfirmedClassModal(true);
  };

  return (
    <SearchProvider>
      <>
        <NavBar />

        <div className="px-4">
          {orderedDays.map((day) => (
            <div className="max-w-[1280px] m-auto mb-8">
              <Accordion title={day} open={day === currentDay}>
                <div className="grid grid-cols-12 gap-x-6 gap-y-8 max-w-[1280px] m-auto mb-4">
                  {getClassItemsByDay(day).map((gymClass) => (
                    <div
                      key={gymClass.id}
                      className="col-span-12 md:col-span-6 lg:col-span-4"
                    >
                      <GymClass
                        id={gymClass.id}
                        title={gymClass.title}
                        description={gymClass.description}
                        day={gymClass.day}
                        time={gymClass.time}
                        price={gymClass.price}
                        onClick={() => addClassClickHandler(gymClass)}
                        onClose={() => setOpenAddedClassModal(false)}
                      />
                    </div>
                  ))}
                </div>
              </Accordion>
            </div>
          ))}
        </div>

        <Modal
          title="Checkout"
          isOpen={openAddedClassModal}
          onClose={() => setOpenAddedClassModal(false)}
        >
          <div className="flex flex-col w-full">
            <div className="mb-2">
              {openAddedClassModal && <CheckoutCard {...bookingData} />}
            </div>
          </div>
        </Modal>

        <Modal
          title="Confirmation"
          isOpen={openConfirmedClassModal}
          onClose={() => setOpenConfirmedClassModal(false)}
        >
          <div className="flex flex-col w-full">
            <div className="mb-2">
              {openAddedClassModal && <CheckoutCard {...bookingData} />}
            </div>

            <h3 className="font-bold mb-4">Booking Confirmed!</h3>

            <Button
              className="mb-2"
              text="View Bookings"
              variant="primary"
              // onClick={() => setOpenConfirmedClassModal(true)}
            />

            <Button
              text="Back to Classes"
              variant="secondary"
              onClick={() => setOpenConfirmedClassModal(false)}
            />
          </div>
        </Modal>
      </>
    </SearchProvider>
  );
}

export default App;
