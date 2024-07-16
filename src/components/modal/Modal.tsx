import { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";

import { ModalProps } from "./types";

const Modal = ({ className, children, isOpen, onClose, title }: ModalProps) => {
  const [isModalOpen, setModalOpen] = useState(isOpen);

  const rootOverlay = () => {
    document.querySelector("body")?.classList.toggle("modal-active");
  };

  useEffect(() => {
    setModalOpen(isOpen);
    rootOverlay();
  }, [isOpen]);

  const closeModalClickHandler = () => {
    setModalOpen(false);
    onClose && onClose();
  };

  return (
    <div
      className={`ui-modal fixed top-0 bottom-0 left-0 right-0 z-100 text-slate-900 ${
        !isModalOpen ? "invisible" : "visible"
      }  ${className}`}
    >
      <div
        className={`transition-all delay-100 ease-in absolute top-0 bottom-0 left-0 right-0 opacity-90 ${
          !isModalOpen ? "opacity-0" : "bg-black"
        }`}
        onClick={closeModalClickHandler}
      ></div>
      <div
        className={`
         absolute left-[50%] translate-x-[-50%] translate-y-[-50%] pb-4 w-[90%] md:w-auto md:min-w-[500px] bg-slate-200 rounded-xl drop-shadow-lg max-h-[80%] overflow-auto transition-all delay-300 ease-in	 ${
           !isModalOpen
             ? "invisible opacity-0 top-[100%]"
             : "visible opacity-100 top-[50%] "
         }`}
      >
        <div className="shadow mb-4">
          <div className="flex justify-between p-4">
            <h2 className="text-xl font-bold">{title}</h2>
            <button onClick={closeModalClickHandler}>
              <MdClose className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="px-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
