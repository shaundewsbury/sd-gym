import { useState } from "react";
import { createPortal } from "react-dom";

import { MdOutlineAccountCircle } from "react-icons/md";
import MyBookingsList from "../MyBookingsList";

import Modal from "../modal/Modal";

const NavBar = () => {
  const [openMyBookingsModal, setOpenMyBookingsModal] = useState(false);

  return (
    <>
      <header className="w-full mb-4 bg-slate-100 px-4">
        <div className="flex items-center justify-between max-w-[1280px] m-auto text-slate-700 h-16 drop-shadow-lg">
          <h1 className="text-lg md:text-xl text-white border-2 bg-slate-900 border-slate-300 rounded p-2">
            SD Gym
          </h1>
          <button onClick={() => setOpenMyBookingsModal(true)}>
            <MdOutlineAccountCircle className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>
      </header>

      {createPortal(
        <Modal
          title="My Bookings"
          isOpen={openMyBookingsModal}
          onClose={() => setOpenMyBookingsModal(false)}
        >
          <MyBookingsList />
        </Modal>,
        document.body
      )}
    </>
  );
};

export default NavBar;
