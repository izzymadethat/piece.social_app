import { Home } from "lucide-react";
import { Menus } from "../utils/menu";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="h-16 text-[15px] flex-center sticky inset-0 bg-accent-secondary/10 shadow-sm z-40">
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
        <div className="flex-center gap-x-5">
          <button className="bg-primary hover:bg-accent-secondary duration-200 text-background z-[999] relative px-3 py-1.5 shadow rounded-xl flex-center">
            Investor Network Login
          </button>
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
