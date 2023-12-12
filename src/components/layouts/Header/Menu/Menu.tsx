import { FC, useState } from "react";
import HamburgerMenu from "@icons/HamburgerMenu/HamburgerMenu";
import MenuItem from "./MenuItem/MenuItem";
import { Link } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";

const Menu: FC = () => {
  const [open, setOpen] = useState(false);
  const isTablet = useMediaQuery("(min-width: 768px)");
  const handleMobileMenuToggle = () => {
    if (!isTablet) {
      setOpen((open) => !open);
    }
  };
  return (
    <div className="relative my-auto flex items-center justify-center">
      <button hidden={isTablet} onClick={handleMobileMenuToggle}>
        <HamburgerMenu />
      </button>
      {((open && !isTablet) || isTablet) && (
        <nav
          className={
            "absolute right-0 top-full rounded bg-white shadow-[4px_4px_3px_0px_rgba(0,0,0,0.10)] lg:relative lg:right-[initial] lg:top-[initial] lg:shadow-none"
          }
        >
          <ul className="flex flex-col gap-3 p-3 lg:flex-row">
            <MenuItem>
              <Link to="/dashboard" onClick={() => setOpen(false)}>
                Dashboard
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/watchlist" onClick={() => setOpen(false)}>
                Watch List
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/reports" onClick={() => setOpen(false)}>
                Reports
              </Link>
            </MenuItem>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Menu;
