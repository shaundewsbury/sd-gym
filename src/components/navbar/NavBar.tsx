import { Link } from "react-router-dom";
import { MdOutlineAccountCircle, MdOutlineShoppingBag } from "react-icons/md";
import Logo from "../logo/Logo";

const NavBar = () => {
  return (
    <header className="ui-nav-bar sticky top-0 z-[99]  w-full mb-4 p-3 border-b-1 border-black drop-shadow-lg shadow-lg bg-slate-900">
      <div className="flex items-center justify-between max-w-[1280px] m-auto">
        <Link to="/account">
          <MdOutlineAccountCircle className="w-6 h-6 md:w-8 md:h-8" />
        </Link>

        <Link to="/">
          <Logo />
        </Link>

        <Link to="/bookings">
          <MdOutlineShoppingBag className="w-6 h-6 md:w-8 md:h-8" />
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
