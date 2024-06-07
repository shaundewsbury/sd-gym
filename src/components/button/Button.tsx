import React from "react";

type Props = {
  className?: string;
  text: string;
  variant: "primary" | "secondary";
  onClick: () => void;
};

const variants = {
  primary: {
    text: "text-slate-200",
    bg: "bg-slate-900",
    hover: {
      text: "text-slate-900",
      bg: "bg-slate-200",
    },
  },
  secondary: {
    text: "text-slate-700",
    bg: "bg-slate-200",
    hover: {
      text: "text-slate-200",
      bg: "bg-slate-700",
    },
  },
};

const Button = ({ className, text, onClick, variant }: Props) => {
  return (
    <button
      className={`ui-button p-2 font-bold text-lg rounded shadow-lg ${variants[variant].bg} ${variants[variant].text} hover:${variants[variant].hover.bg} hover:${variants[variant].hover.text} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
