import { useState } from "react";
import { MdChevronRight } from "react-icons/md";

import { AccordionProps } from "./types";

const Accordion = ({ children, open, title }: AccordionProps) => {
  const [active, setActive] = useState(open);

  return (
    <div className="ui-accordion">
      <button
        className="flex gap-2 items-center"
        onClick={() => setActive(!active)}
      >
        <h2 className="text-l font-bold hover:text-slate-300">{title}</h2>
        <MdChevronRight
          className={`${
            active ? "rotate-[-90deg]" : "rotate-90"
          } w-6 h-6 transition-all`}
        />
      </button>
      <div className={`${active ? "block mt-4" : "hidden"}`}>{children}</div>
    </div>
  );
};

export default Accordion;
