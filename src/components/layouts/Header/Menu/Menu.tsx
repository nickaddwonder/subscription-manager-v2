import { FC } from "react";
import HamburgerMenu from "./../../../../icons/HamburgerMenu/HamburgerMenu";
import MenuItem from "./MenuItem/MenuItem";

const Menu: FC = () => {
  return (
    <div className="relative flex h-full items-center justify-center">
      <button onClick={() => console.log("me clicked!")}>
        <HamburgerMenu />
      </button>
      <nav className="absolute -bottom-[24px] right-0 bg-white">
        <ul className="p-3">
          <MenuItem>this is an item</MenuItem>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
