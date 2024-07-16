export type ButtonProps = {
  children: string;
  fullWidth?: boolean;
  link?: string;
  onClick?: () => void;
  variant: "primary" | "secondary";
};
