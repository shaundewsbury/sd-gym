import { createContext, useState, useContext } from "react";
import { useLocalStorage } from "../utils/useLocalStorage";

export const BookingsContext = createContext();
export const BookingsContextProvider = BookingsContext.Provider;
export const useBookingsContext = () => useContext(BookingsContext);

export const SearchProvider = ({ children }) => {
  const [myBookings, setMyBookings] = useLocalStorage("bookings", []);

  const addNewBooking = (booking) =>
    setMyBookings((prevState) => [...prevState, booking]);

  const removeBooking = (id) => {
    setMyBookings((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  };

  return (
    <BookingsContextProvider
      value={{
        myBookings,
        addNewBooking,
        removeBooking,
      }}
    >
      {children}
    </BookingsContextProvider>
  );
};
