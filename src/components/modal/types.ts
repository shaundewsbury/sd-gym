import { ReactNode } from "react";

export type ModalProps = {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  title: string;
};
