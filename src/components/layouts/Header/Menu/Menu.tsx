import { FC } from "react";
import HamburgerMenu from "@icons/HamburgerMenu/HamburgerMenu";
import MenuItem from "./MenuItem/MenuItem";
import { Link } from "react-router-dom";

const Menu: FC = () => {
  return (
    <div className="relative my-auto flex items-center justify-center">
      <button onClick={() => console.log("me clicked!")}>
        <HamburgerMenu />
      </button>
      <nav className="absolute right-0 top-full rounded bg-white shadow-[4px_4px_3px_0px_rgba(0,0,0,0.10)]">
        <ul className="flex flex-col gap-3 p-3">
          <MenuItem>
            <Link to="/dashboard">Dashboard</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/watchlist">Watch List</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/reports">Reports</Link>
          </MenuItem>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
