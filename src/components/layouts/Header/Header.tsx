import { FC } from "react";
import Logo from "./Logo/Logo";
import { UserButton } from "@clerk/clerk-react";
import Menu from "./Menu/Menu";

const Header: FC = () => {
  return (
    <header className="header  h-[60px]  bg-white">
      <div className="container mx-auto h-full px-3">
        <div className="-mx-3 flex h-full justify-between">
          <div className="w-auto shrink-0 px-3">
            <Logo />
          </div>
          <div className="ml-auto w-auto shrink-0 px-3">
            <Menu />
          </div>
          <div className="flex w-auto shrink-0 items-center justify-end px-3">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
