import { ReactNode } from "react";

export type AccordionProps = {
  children: ReactNode;
  open?: boolean;
  title: string;
};
