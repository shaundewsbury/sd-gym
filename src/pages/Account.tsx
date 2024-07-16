import PageTitle from "../components/page-title/PageTitle";
import MyBookingsList from "../components/MyBookingsList";
import { MdAccountCircle } from "react-icons/md";

const Account = () => {
  return (
    <div className="px-4">
      <PageTitle title="Account" />

      <div className="flex items-center gap-2 bg-slate-100 text-slate-900 rounded border border-slate-900 shadow-2xl p-4">
        <MdAccountCircle className="text-slate-300 w-20 h-20" />

        <div className="flex flex-col gap-2">
          <p>
            <span className="font-semibold">Name:</span> Shaun Dewsbury
          </p>
          <p>
            <span className="font-semibold">Membership:</span> Full
          </p>
          <p>
            <span className="font-semibold">Email:</span> example@example.com
          </p>
          <p>
            <span className="font-semibold">Number:</span> 0712345678987
          </p>
        </div>
      </div>
    </div>
  );
};

export default Account;
