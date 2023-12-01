import { FC } from "react";
import HamburgerMenu from "@icons/HamburgerMenu/HamburgerMenu";
import MenuItem from "./MenuItem/MenuItem";

const Menu: FC = () => {
  return (
    <div className="relative flex h-full items-center justify-center">
      <button onClick={() => console.log("me clicked!")}>
        <HamburgerMenu />
      </button>
      <nav className="absolute -bottom-[32px] right-0 bg-white shadow-[4px_4px_3px_0px_rgba(0,0,0,0.10)]">
        <ul className="p-3">
          <MenuItem>this is an item</MenuItem>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
