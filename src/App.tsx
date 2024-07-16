import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { BookingsProvider } from "./context/BookingsContext";

import NavBar from "./components/navbar/NavBar";

import Home from "./pages/Home";
import Account from "./pages/Account";
import Bookings from "./pages/Bookings";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <BookingsProvider>
      <>
        <NavBar />

        <div className="max-w-[1280px] m-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/account" element={<Account />} />
            <Route path="/bookings" element={<Bookings />} />
          </Routes>
        </div>
      </>
    </BookingsProvider>
  );
}

export default App;
