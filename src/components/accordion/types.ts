import { ReactNode } from "react";

export type AccordionProps = {
  className?: string;
  children: ReactNode;
  open?: boolean;
  title: string;
};
