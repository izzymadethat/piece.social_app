import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Home } from "lucide-react";
import { Button, Dropdown } from "rizzui";
import { Menus } from "../utils/menu";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="h-16 text-[15px] flex-center sticky inset-0 bg-accent-secondary/20 shadow-sm z-40">
      <nav className="px-3.5 w-full flex-center-between mx-auto">
        <div className="flex-center gap-x-2 z-[999] relative">
          <Home size={32} />
          <h3 className="text-lg">Piece.Social</h3>
        </div>

        {/* Desktop menu */}
        <ul className="hidden lg:flex-center gap-x-1">
          {Menus.map((menu) => (
            <DesktopMenu menu={menu} key={menu.name} />
          ))}
        </ul>
        <div className="hidden lg:flex-center gap-x-2">
          <SignInButton>
            <Button
              as="span"
              variant="outline"
              className="bg-primary hover:bg-accent-secondary duration-200 text-background z-[999] relative px-3 py-1.5 shadow rounded-xl flex-center cursor-pointer"
            >
              Login
            </Button>
          </SignInButton>

          <Button
            variant="outline"
            className="hover:bg-accent-secondary duration-200 hover:text-background z-[999] relative px-3 py-1.5 shadow rounded-xl flex-center"
          >
            Sign up
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden">
          <MobileMenu Menus={Menus} />
        </div>
      </nav>
    </header>
  );
};
export default Header;
