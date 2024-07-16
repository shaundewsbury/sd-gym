import { ButtonProps } from "./types";
import { variants } from "./config";

const Button = ({ children, onClick, variant, fullWidth }: ButtonProps) => {
  return (
    <button
      className={`ui-button px-4 py-2 font-bold rounded shadow-lg border border-slate-800 ${
        fullWidth && "w-full"
      } ${variants[variant].bg} ${variants[variant].text} hover:${
        variants[variant].hover.bg
      } hover:${variants[variant].hover.text}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
