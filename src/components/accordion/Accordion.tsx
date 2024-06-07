import { useState } from "react";
import { MdChevronRight } from "react-icons/md";

import { AccordionProps } from "./types";

const Accordion = ({ className, children, open, title }: AccordionProps) => {
  const [active, setActive] = useState(open);

  return (
    <div className={`ui-accordion ${className}`}>
      <button
        className="flex gap-2 items-center"
        onClick={() => setActive(!active)}
      >
        <h2 className="text-2xl font-bold text-white hover:text-slate-300">
          {title}
        </h2>
        <MdChevronRight
          className={`${
            active ? "rotate-[-90deg]" : "rotate-90"
          } w-6 h-6 text-white transition-all`}
        />
      </button>
      <div className={`${active ? "block mt-6" : "hidden"} text-white`}>
        {children}
      </div>
    </div>
  );
};

export default Accordion;
