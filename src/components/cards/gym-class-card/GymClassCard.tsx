import { GymClassCardProps } from "./types";
import Button from "../../button/Button";

const GymClassCard = ({ title, day, time, onClick }: GymClassCardProps) => {
  return (
    <div className="ui-gym-class-card flex flex-col gap-6 p-2 rounded border border-slate-900 shadow-2xl bg-slate-700">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <p className="text-sm bg-slate-500 p-2 rounded">
            {day.substr(0, 3)} {time}
          </p>

          <h2 className="text-lg font-bold">{title}</h2>
        </div>

        <Button variant="secondary" onClick={onClick}>
          Add
        </Button>
      </div>
    </div>
  );
};

export { GymClassCard };
